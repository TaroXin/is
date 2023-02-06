// Automatically generate code
import getTag from './getTag'

/**
 * Check value is RegExp
 * @param {any} value
 * @returns {boolean}
 */
export function isRegExp(value: any): boolean {
  return getTag(value) === '[object RegExp]'
}
