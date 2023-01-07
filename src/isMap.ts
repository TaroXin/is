// Automatically generate code
import getTag from './getTag'

export function isMap(value: any): boolean {
  return getTag(value) === '[object Map]'
}
