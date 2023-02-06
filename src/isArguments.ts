// Automatically generate code
import getTag from './getTag'

/**
 * Check value is Arguments
 * @param {any} value
 * @returns {boolean}
 */
export function isArguments(value: any): boolean {
  return getTag(value) === '[object Arguments]'
}
