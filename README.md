# IS

```js
import is, { CheckTypes } from '@taroxin/is'

is('test') // CheckTypes.String
is(1) // CheckTypes.Number
```

Use type check

```js
import { isNumber, isObject } from '@taroxin/is'

isNumber(1) // true
isObject(null) // false
isObject({}) // true
```

<!-- GenDocs -->
## Functions

<dl>
<dt><a href="#isArguments">isArguments(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Arguments</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Array</p>
</dd>
<dt><a href="#isBoolean">isBoolean(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Boolean</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Date</p>
</dd>
<dt><a href="#isError">isError(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Error</p>
</dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Function</p>
</dd>
<dt><a href="#isIdCard">isIdCard(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Id Card [检查值为中国身份证]</p>
</dd>
<dt><a href="#isMap">isMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Map</p>
</dd>
<dt><a href="#isNull">isNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Null</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Number</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Object</p>
</dd>
<dt><a href="#isRegExp">isRegExp(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is RegExp</p>
</dd>
<dt><a href="#isSet">isSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Set</p>
</dd>
<dt><a href="#isString">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is String</p>
</dd>
<dt><a href="#isSymbol">isSymbol(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Symbol</p>
</dd>
<dt><a href="#isUndefined">isUndefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is Undefined</p>
</dd>
<dt><a href="#isWeakMap">isWeakMap(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is WeakMap</p>
</dd>
<dt><a href="#isWeakSet">isWeakSet(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value is WeakSet</p>
</dd>
</dl>

<a name="isArguments"></a>

## isArguments(value) ⇒ <code>boolean</code>
Check value is Arguments

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
Check value is Array

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>boolean</code>
Check value is Boolean

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
Check value is Date

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isError"></a>

## isError(value) ⇒ <code>boolean</code>
Check value is Error

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isFunction"></a>

## isFunction(value) ⇒ <code>boolean</code>
Check value is Function

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isIdCard"></a>

## isIdCard(value) ⇒ <code>boolean</code>
Check value is Id Card [检查值为中国身份证]

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isMap"></a>

## isMap(value) ⇒ <code>boolean</code>
Check value is Map

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isNull"></a>

## isNull(value) ⇒ <code>boolean</code>
Check value is Null

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
Check value is Number

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Check value is Object

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isRegExp"></a>

## isRegExp(value) ⇒ <code>boolean</code>
Check value is RegExp

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isSet"></a>

## isSet(value) ⇒ <code>boolean</code>
Check value is Set

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isString"></a>

## isString(value) ⇒ <code>boolean</code>
Check value is String

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isSymbol"></a>

## isSymbol(value) ⇒ <code>boolean</code>
Check value is Symbol

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isUndefined"></a>

## isUndefined(value) ⇒ <code>boolean</code>
Check value is Undefined

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isWeakMap"></a>

## isWeakMap(value) ⇒ <code>boolean</code>
Check value is WeakMap

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isWeakSet"></a>

## isWeakSet(value) ⇒ <code>boolean</code>
Check value is WeakSet

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

