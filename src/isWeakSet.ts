// Automatically generate code
import getTag from './getTag'

export function isWeakSet(value: any): boolean {
  return getTag(value) === '[object WeakSet]'
}
