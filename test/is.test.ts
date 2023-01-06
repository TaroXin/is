/* eslint-disable no-new-object */
/* eslint-disable no-new-wrappers */
import { expect, test } from 'vitest'
import * as is from '../src/index'

const unitCases = {
  Function: new Map<any, boolean>([
    [() => { return null }, true],
    [function test() { return null }, true],
  ]),
  String: new Map<any, boolean>([
    ['', true],
    ['1', true],
    [1, false],
    [new String(), true],
  ]),
  Number: new Map<any, boolean>([
    ['', false],
    ['1', false],
    [1, true],
    [new Number(), true],
    [new String('1'), false],
    [new Number('abc'), true],
  ]),
  Date: new Map<any, boolean>([
    ['Mon Mar 23 2020 20:05:45 GMT+0800 (中国标准时间)', false],
    [1505588756954, false],
    [new Date(), true],
    [new Date(2015), true],
    [Date.now(), false],
  ]),
  RegExp: new Map<any, boolean>([
    [/abc/, true],
    ['abc', false],
    [/^$/, true],
    // eslint-disable-next-line prefer-regex-literals
    [new RegExp('\w'), true],
  ]),
  Error: new Map<any, boolean>([
    ['error', false],
    [new Error('error'), true],
    [new SyntaxError('error'), true],
    [new ReferenceError('error'), true],
  ]),
  Map: new Map<any, boolean>([
    [new Map(), true],
    [{ a: 1 }, false],
    [new Set(), false],
    [new WeakMap(), false],
  ]),
  Set: new Map<any, boolean>([
    [new Map(), false],
    [{ a: 1 }, false],
    [new Set(), true],
    [[1, 2, 3], false],
  ]),
  Array: new Map<any, boolean>([
    [[], true],
    ['[]', false],
    [new Array([]), true],
    [Array.from(''), true],
  ]),
  Object: new Map<any, boolean>([
    [{}, true],
    ['{}', false],
    [new Object(), true],
    [Object.create({}), true],
  ]),
  Boolean: new Map<any, boolean>([
    [true, true],
    [false, true],
    ['true', false],
    ['false', false],
    [1, false],
    [0, false],
    [new Boolean(), true],
  ]),
  Null: new Map<any, boolean>([
    [null, true],
    ['', false],
    [[], false],
    [new Object(null), false],
    [NaN, false],
    [undefined, false],
  ]),
  Undefined: new Map<any, boolean>([
    [null, false],
    ['', false],
    [[], false],
    [new Object(null), false],
    [NaN, false],
    [undefined, true],
  ]),
}

test('is', () => {
  for (const key in unitCases) {
    const unitMap = unitCases[key]

    for (const [valueKey, valueExpect] of unitMap) {
      console.log('key', key, 'valueKey', valueKey)
      console.log(`is${key}`, is[`is${key}`](valueKey))
      expect(is[`is${key}`](valueKey)).toBe(valueExpect)
    }
  }
})
