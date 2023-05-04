import type { Config } from '../types/index.js'

export const DEFAULT_CONFIG: Config = {
	clientOptions: null,
	heartbeat: {
		interval: 5 * 1000,
		url: null
	},
	sage: {
		defer: true,
		deferBuffer: 250,
		ephemeral: false,
		errorReplies: true
	},
	timeouts: {
		commandRegistration: 3 * 1000,
		lifecycle: 5 * 1000
	}
}

// Timer symbols
export const BUFFER = Symbol('BUFFER')
export const TIMEOUT = Symbol('TIMEOUT')
