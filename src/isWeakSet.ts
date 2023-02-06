// Automatically generate code
import getTag from './getTag'

/**
 * Check value is WeakSet
 * @param {any} value
 * @returns {boolean}
 */
export function isWeakSet(value: any): boolean {
  return getTag(value) === '[object WeakSet]'
}
