// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Error
 * @param {any} value
 * @returns {boolean}
 */
export function isError(value: any): boolean {
  return getTag(value) === '[object Error]'
}
