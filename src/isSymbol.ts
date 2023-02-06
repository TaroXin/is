// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Symbol
 * @param {any} value
 * @returns {boolean}
 */
export function isSymbol(value: any): boolean {
  return getTag(value) === '[object Symbol]'
}
