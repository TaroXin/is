// Automatically generate code
import getTag from './getTag'

export function isSet(value: any): boolean {
  return getTag(value) === '[object Set]'
}
