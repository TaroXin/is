// Automatically generate code
import getTag from './getTag'

export function isNull(value: any): boolean {
  return getTag(value) === '[object Null]'
}
