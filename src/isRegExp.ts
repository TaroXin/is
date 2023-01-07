// Automatically generate code
import getTag from './getTag'

export function isRegExp(value: any): boolean {
  return getTag(value) === '[object RegExp]'
}
