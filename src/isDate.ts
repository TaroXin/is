// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Date
 * @param {any} value
 * @returns {boolean}
 */
export function isDate(value: any): boolean {
  return getTag(value) === '[object Date]'
}
