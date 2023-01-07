// Automatically generate code
import getTag from './getTag'

export function isObject(value: any): boolean {
  return getTag(value) === '[object Object]'
}
