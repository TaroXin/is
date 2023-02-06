// Automatically generate code
import getTag from './getTag'

/**
 * Check value is WeakMap
 * @param {any} value
 * @returns {boolean}
 */
export function isWeakMap(value: any): boolean {
  return getTag(value) === '[object WeakMap]'
}
