
export interface ModelDefinition {
  readonly name: string;
  readonly attributes: AttributeType;
}

export interface Attribute {
  readonly type: AttributeType;
  readonly label: string;
  readonly subtype?: Value;
}

export enum AttributeType {
  Date = 0,
  Number,
  Enum,
  Boolean,
  Collection,
  Optional,
  Model,
}

export interface Model extends Attribute {
  readonly type: AttributeType.Model;
  readonly attributes: Attribute[];
}

export interface Collection extends Attribute {
  readonly type: AttributeType.Collection;
  readonly subtype: AttributeType;
}

export interface Optional extends Attribute {
  readonly type: AttributeType.Optional;
  readonly subtype: AttributeType;
}

export type Enum = string;

export type Value = Model | Value[] | Primitive | undefined;

export type Primitive = Enum | Date | Number | boolean;
