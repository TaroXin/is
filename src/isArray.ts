// Automatically generate code
import getTag from './getTag'

export function isArray(value: any): boolean {
  return getTag(value) === '[object Array]'
}
