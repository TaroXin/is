// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Boolean
 * @param {any} value
 * @returns {boolean}
 */
export function isBoolean(value: any): boolean {
  return getTag(value) === '[object Boolean]'
}
