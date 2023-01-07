// Automatically generate code
import getTag from './getTag'

export function isUndefined(value: any): boolean {
  return getTag(value) === '[object Undefined]'
}
