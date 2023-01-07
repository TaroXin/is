// Automatically generate code
import getTag from './getTag'

export function isFunction(value: any): boolean {
  return getTag(value) === '[object Function]'
}
