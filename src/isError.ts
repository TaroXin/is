// Automatically generate code
import getTag from './getTag'

export function isError(value: any): boolean {
  return getTag(value) === '[object Error]'
}
