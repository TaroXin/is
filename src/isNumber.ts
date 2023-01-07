// Automatically generate code
import getTag from './getTag'

export function isNumber(value: any): boolean {
  return getTag(value) === '[object Number]'
}
