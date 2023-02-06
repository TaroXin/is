// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Array
 * @param {any} value
 * @returns {boolean}
 */
export function isArray(value: any): boolean {
  return getTag(value) === '[object Array]'
}
