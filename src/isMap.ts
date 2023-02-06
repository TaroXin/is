// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Map
 * @param {any} value
 * @returns {boolean}
 */
export function isMap(value: any): boolean {
  return getTag(value) === '[object Map]'
}
