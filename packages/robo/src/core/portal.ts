import { Collection } from 'discord.js'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { getManifest } from '../cli/utils/manifest.js'
import { hasProperties } from '../cli/utils/utils.js'
import { logger } from './logger.js'
import { color, composeColors, hex } from '../cli/utils/color.js'
import type { BaseConfig, Command, Context, Event, HandlerRecord, Middleware } from '../types/index.js'

export default class Portal {
	public commands: Collection<string, HandlerRecord<Command>>
	public context: Collection<string, HandlerRecord<Context>>
	public events: Collection<string, HandlerRecord<Event>[]>
	public middleware: HandlerRecord<Middleware>[] = []

	private _enabledModules: Record<string, boolean> = {}
	private _modules: Record<string, Module> = {}

	constructor(
		commands: Collection<string, HandlerRecord<Command>>,
		context: Collection<string, HandlerRecord<Context>>,
		events: Collection<string, HandlerRecord<Event>[]>,
		middleware: HandlerRecord<Middleware>[]
	) {
		this.commands = commands
		this.context = context
		this.events = events
		this.middleware = middleware
	}

	module(moduleName: string) {
		let moduleInstance = this._modules[moduleName]
		if (!moduleInstance) {
			moduleInstance = new Module(moduleName, this._enabledModules)
			this._modules[moduleName] = moduleInstance
		}
		return moduleInstance
	}

	/**
	 * Creates a new Portal instance from the manifest file.
	 *
	 * Warning: Do not call this method directly. Use the `portal` export instead.
	 */
	public static async open(): Promise<Portal> {
		const commands = await loadHandlerRecords<HandlerRecord<Command>>('commands')
		const context = await loadHandlerRecords<HandlerRecord<Context>>('context')
		const events = await loadHandlerRecords<HandlerRecord<Event>[]>('events')
		const middleware = [...(await loadHandlerRecords<HandlerRecord<Middleware>>('middleware')).values()]

		return new Portal(commands, context, events, middleware)
	}
}

class Module {
	constructor(private _moduleName: string, private _enabledModules: Record<string, boolean>) {}

	get isEnabled(): boolean {
		return this._enabledModules[this._moduleName] ?? true
	}

	setEnabled(value: boolean) {
		this._enabledModules[this._moduleName] = value
	}
}

interface ScanOptions<T> {
	manifestEntries: Record<string, T | T[]> | T[]
	recursionKeys?: string[]
}
type ScanPredicate = <T>(entry: T, entryKeys: string[]) => Promise<void>

async function scanEntries<T>(predicate: ScanPredicate, options: ScanOptions<T>) {
	const { manifestEntries, recursionKeys = [] } = options
	const promises: Promise<unknown>[] = []

	for (const entryName in manifestEntries) {
		const entryItem = Array.isArray(manifestEntries) ? manifestEntries : manifestEntries[entryName]
		const entries = Array.isArray(entryItem) ? entryItem : [entryItem]

		entries.forEach((entry) => {
			const entryKeys = [...recursionKeys, entryName]
			promises.push(predicate(entry, entryKeys))

			if (hasProperties<{ subcommands: Record<string, T> }>(entry, ['subcommands']) && entry.subcommands) {
				const resursion = scanEntries(predicate, {
					manifestEntries: entry.subcommands,
					recursionKeys: entryKeys
				})
				promises.push(resursion)
			}
		})
	}

	return Promise.all(promises)
}

async function loadHandlerRecords<T extends HandlerRecord | HandlerRecord[]>(
	type: 'commands' | 'context' | 'events' | 'middleware'
) {
	const collection = new Collection<string, T>()
	const manifest = getManifest()

	// Log manifest objects as debug info
	const pcolor =
		type === 'commands'
			? composeColors(color.blue, color.bold)
			: type === 'context'
			? composeColors(hex('#536DFE'), color.bold)
			: type === 'events'
			? composeColors(color.magenta, color.bold)
			: composeColors(color.gray, color.bold)
	const formatCommand = (command: string) => pcolor(`/${command}`)
	const formatContext = (context: string) => pcolor(`${context} (${context})`)
	const formatEvent = (event: string) => pcolor(`${event} (${manifest.events[event].length})`)
	const formatMiddleware = (middleware: string) => pcolor(`${middleware}`)
	const formatter =
		type === 'commands'
			? formatCommand
			: type === 'context'
			? formatContext
			: type === 'events'
			? formatEvent
			: formatMiddleware
	const handlers = Object.keys(manifest[type]).map(formatter)
	logger.debug(`Loading ${type}: ${handlers.join(', ')}`)

	const scanPredicate: ScanPredicate = async (entry: BaseConfig, entryKeys) => {
		// Skip for nested entries (no __path)
		if (!entry.__path) {
			return
		}

		// Load the module
		const basePath = path.join(process.cwd(), entry.__plugin?.path ?? '.')
		const importPath = pathToFileURL(path.join(basePath, entry.__path)).toString()

		const handler: HandlerRecord = {
			auto: entry.__auto,
			handler: await import(importPath),
			key: entryKeys.join('/'),
			module: entry.__module,
			path: entry.__path,
			plugin: entry.__plugin,
			type: type === 'events' ? 'event' : type === 'commands' ? 'command' : type
		}

		// Assign the handler to the collection, handling difference between types
		if (type === 'events') {
			const eventKey = entryKeys[0]
			if (!collection.has(eventKey)) {
				collection.set(eventKey, [] as T)
			}
			const handlers = collection.get(eventKey) as HandlerRecord[]
			handlers.push(handler)
		} else if (type === 'commands') {
			const commandKey = entryKeys.join(' ')
			collection.set(commandKey, handler as T)
		} else if (type === 'context') {
			const contextKey = entryKeys[0]
			collection.set(contextKey, handler as T)
		} else if (type === 'middleware') {
			collection.set(entryKeys[0], handler as T)
		}
	}

	// Scan context a bit differently due to nesting
	if (type === 'context') {
		await scanEntries(scanPredicate, { manifestEntries: manifest.context.message })
		await scanEntries(scanPredicate, { manifestEntries: manifest.context.user })
	} else {
		await scanEntries(scanPredicate, { manifestEntries: manifest[type] })
	}

	return collection
}
