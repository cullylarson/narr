# narr [![Build Status](https://travis-ci.org/cullylarson/narr.svg?branch=master)](https://travis-ci.org/cullylarson/narr) [![Coverage Status](https://coveralls.io/repos/cullylarson/narr/badge.svg?branch=master&service=github)](https://coveralls.io/github/cullylarson/narr?branch=master)

> Creates an array of size N, filled with undefined, without iterating to fill. Useful for applying higher order functions (e.g. map, reduce) to produce dense arrays of size N.


## Install

```
$ npm install narr --save
```

## Usage Examples

### Create an array of random integers

```js
import narr from "narr"

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const randArry = narr(10).map(() => randomInt(1,100))
// [ 37, 30, 57, 44, 50, 42, 99, 78, 29, 8 ]
```

### Create a string of random characters

```js
import narr from "narr"

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
const characters = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const id = narr(20).reduce((carry) => carry + characters.substr(randomInt(0,characters.length),1), "")
// tTz4PNUrvFWSjUDY0qn8
```

## Why?

So, why not just do something like this:

```js
new Array(20).map(() => Math.random())
```

The array created using `new Array(20)` has a length of 20, but it doesn't have any elements.
So, you can't map or reduce over it.  See `test.js` for some counter-examples.


## License

MIT © Cully Larson
