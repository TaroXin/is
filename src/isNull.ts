// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Null
 * @param {any} value
 * @returns {boolean}
 */
export function isNull(value: any): boolean {
  return getTag(value) === '[object Null]'
}
