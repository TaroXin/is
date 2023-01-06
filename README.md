# is

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

## functions

- isArguments
- isFunction
- isString
- isNumber
- isDate
- isRegExp
- isError
- isSymbol
- isMap
- isWeakMap
- isSet
- isWeakSet
- isArray
- isObject
- isBoolean
- isNull
- isUndefined