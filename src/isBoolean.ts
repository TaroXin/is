// Automatically generate code
import getTag from './getTag'

export function isBoolean(value: any): boolean {
  return getTag(value) === '[object Boolean]'
}
