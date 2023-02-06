// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Object
 * @param {any} value
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
  return getTag(value) === '[object Object]'
}
