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

export * from './isArguments'
export * from './isArray'
export * from './isBoolean'
export * from './isDate'
export * from './isError'
export * from './isFunction'
export * from './isIdCard'
export * from './isMap'
export * from './isNull'
export * from './isNumber'
export * from './isObject'
export * from './isRegExp'
export * from './isSet'
export * from './isString'
export * from './isSymbol'
export * from './isUndefined'
export * from './isWeakMap'
export * from './isWeakSet'
