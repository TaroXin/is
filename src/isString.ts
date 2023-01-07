// Automatically generate code
import getTag from './getTag'

export function isString(value: any): boolean {
  return getTag(value) === '[object String]'
}
