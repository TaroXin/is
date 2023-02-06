// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Undefined
 * @param {any} value
 * @returns {boolean}
 */
export function isUndefined(value: any): boolean {
  return getTag(value) === '[object Undefined]'
}
