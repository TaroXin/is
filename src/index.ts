export default function is(value: any): string {
  const type: string = Object.prototype.toString.call(value)
  const reg = /\[object ([a-zA-Z]+)\]/
  return type.match(reg)?.[1] || ''
}

// Automatically generate code, do not modify it
// @see scripts/gen-code.ts
// GenCode Start
export const CheckTypes = {
  Arguments: 'Arguments',
  Function: 'Function',
  String: 'String',
  Number: 'Number',
  Date: 'Date',
  RegExp: 'RegExp',
  Error: 'Error',
  Symbol: 'Symbol',
  Map: 'Map',
  WeakMap: 'WeakMap',
  Set: 'Set',
  WeakSet: 'WeakSet',
  Array: 'Array',
  Object: 'Object',
  Boolean: 'Boolean',
  Null: 'Null',
  Undefined: 'Undefined',
}

export function isArguments(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Arguments]'
}

export function isFunction(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Function]'
}

export function isString(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function isNumber(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export function isDate(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Date]'
}

export function isRegExp(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object RegExp]'
}

export function isError(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Error]'
}

export function isSymbol(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Symbol]'
}

export function isMap(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Map]'
}

export function isWeakMap(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object WeakMap]'
}

export function isSet(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Set]'
}

export function isWeakSet(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object WeakSet]'
}

export function isArray(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Array]'
}

export function isObject(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isBoolean(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}

export function isNull(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Null]'
}

export function isUndefined(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Undefined]'
}
