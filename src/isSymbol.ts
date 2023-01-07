// Automatically generate code
import getTag from './getTag'

export function isSymbol(value: any): boolean {
  return getTag(value) === '[object Symbol]'
}
