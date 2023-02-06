// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Function
 * @param {any} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
  return getTag(value) === '[object Function]'
}
