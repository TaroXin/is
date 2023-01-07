// Automatically generate code
import getTag from './getTag'

export function isWeakMap(value: any): boolean {
  return getTag(value) === '[object WeakMap]'
}
