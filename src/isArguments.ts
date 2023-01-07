// Automatically generate code
import getTag from './getTag'

export function isArguments(value: any): boolean {
  return getTag(value) === '[object Arguments]'
}
