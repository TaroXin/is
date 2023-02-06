// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Set
 * @param {any} value
 * @returns {boolean}
 */
export function isSet(value: any): boolean {
  return getTag(value) === '[object Set]'
}
