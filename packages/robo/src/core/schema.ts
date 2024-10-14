export type SchemaField = {
	type: string
	description?: string
	default?: any
	required?: boolean
	properties?: Record<string, SchemaField>
	min?: number
	max?: number
	items?: Record<any, any>
}
class SchemaBuilder {
	string(): FieldBuilder {
		return new FieldBuilder('string')
	}

	number(): FieldBuilder {
		return new FieldBuilder('number')
	}

	boolean(): FieldBuilder {
		return new FieldBuilder('boolean')
	}

	object(fields: Record<string, FieldBuilder>): FieldBuilder {
		const properties: Record<string, SchemaField> = Object.fromEntries(
			Object.entries(fields).map(([key, fieldBuilder]) => [key, fieldBuilder.toSchema()])
		)
		return new FieldBuilder('object', properties)
	}

	array(itemSchema: FieldBuilder): FieldBuilder {
		return new FieldBuilder('array', itemSchema.toSchema())
	}
}

class FieldBuilder {
	private schema: SchemaField = {} as SchemaField

	constructor(type: string, properties?: Record<string, SchemaField> | SchemaField) {
		this.schema.type = type
		if (type === 'object') {
			this.schema.properties = properties as Record<string, SchemaField>
		} else if (type === 'array') {
			this.schema.items = properties as SchemaField
		}
	}

	description(desc: string): this {
		this.schema.description = desc
		return this
	}

	default(value: any): this {
		this.schema.default = value
		return this
	}

	required(): this {
		this.schema.required = true
		return this
	}

	min(value: number): this {
		this.schema.min = value
		return this
	}

	max(value: number): this {
		this.schema.max = value
		return this
	}

	toSchema(): SchemaField {
		const schema: SchemaField = Object.fromEntries(
			Object.entries({
				type: this.schema.type,
				description: this.schema.description,
				default: this.schema.default,
				required: this.schema.required,
				min: this.schema.min,
				max: this.schema.max
			}).filter(([_, value]) => value !== undefined)
		) as SchemaField
		if (this.schema.type === 'object') {
			schema.properties = this.schema.properties
		} else if (this.schema.type === 'array') {
			schema.items = this.schema.items
		}
		return schema
	}
}

export class PluginOptions {
	static define(schemaBuilder: (c: SchemaBuilder) => Record<string, FieldBuilder>): Record<string, SchemaField> {
	  const builder = new SchemaBuilder()
	  const schema = schemaBuilder(builder)
  
	  return Object.fromEntries(Object.entries(schema).map(([key, fieldBuilder]) => [key, fieldBuilder.toSchema()]))
	}
	
  }
  

