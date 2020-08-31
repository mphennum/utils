# utils

Javascript utilities for strings, numbers, dates, etc.

## table of contents

- [installing](#installing)
- [array](#array)
- [date](#date)
- [number](#number)
- [string](#string)
- [other](#other)

* * *

## installing

### npm

```bash
$ npm install @mphennum/utils
```

```js
import utils from '@mphennum/utils'; // import entire utils library
// or
import array from '@mphennum/utils/dist/array'; // import sub library

console.log(array.shuffle([ 1, 2, 3, 4, 5 ]));
```

### html

```html
<script src="/path/to/dist/utils.min.js"></script>
```

```js
var array = window.utils.array;
console.log(array.shuffle([ 1, 2, 3, 4, 5 ]));
```

* * *

## array

### shuffle

Shuffles an array.

```js
var arr = [ 1, 2, 3, 4, 5 ];
array.shuffle(arr); // also returns the shuffled array
console.log(arr);
```

## date

## number

### toCompact

Returns a compact form of a given number.

```js
var compact = number.toCompact(1500); // returns "1.5k"
console.log({ compact: compact });
```

### toOrdinal

Returns a string with corresponding ordinal indicator.

```js
var ordinal = number.toOrdinal(11); // returns "11th"
console.log({ ordinal: ordinal });
```

## string

### deaccent

Deaccents a string by replacing unicode characters.

```js
var str = string.deaccent('Fëanor'); // returns "Feanor"
console.log({ str: str });
```

### toSlug

Converts a string into a slug to be used in a url path.

```js
var slug = string.toSlug('Word with spaces'); // returns "word-with-spaces"
console.log({ slug: slug });
```

## other

### randId

Generates a random id.

```js
var id = utils.randId(); // generates a random id, usually 5 to 6 chars
var id2 = utils.randId(14); // generates a random id, 14 chars
console.log({ id: id, id2: id2 });
```

### rand

Random helper with multiple options.

```js
var r = utils.rand(); // random float from 0 (inclusive) to 1 (exclusive)
var r2 = utils.rand('string'); // random character from string
var r3 = utils.rand([ 1, 2, 3, 4, 5 ]); // rand item from array
var r4 = utils.rand(1, 4); // rand int from 1 (inclusive) to 4 (inclusive)
console.log({ r: r, r2: r2, r3: r3, r4: r4 });
```

### seqId

Generates a sequential id.

```js
var id = utils.seqId(); // generates a sequential id starting with "a"
var id2 = utils.seqId(3); // generates a sequential id starting with a minimum length of 3 -- "aaa"
var id3 = utils.seqId('ZZZ'); // generates a sequential id starting after "ZZZ" -- "ZZ0"
console.log({ id: id, id2: id2, id3: id3 });
```
