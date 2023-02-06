// Automatically generate code
import getTag from './getTag'

/**
 * Check value is String
 * @param {any} value
 * @returns {boolean}
 */
export function isString(value: any): boolean {
  return getTag(value) === '[object String]'
}
