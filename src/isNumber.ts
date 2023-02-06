// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Number
 * @param {any} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return getTag(value) === '[object Number]'
}
