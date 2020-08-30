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
import { array } from '@mphennum/utils'; // import sub libraries
// or
import { shuffle } from '@mphennum/utils/dist/array'; // import function from sub library
// or
import shuffle from '@mphennum/utils/dist/array/shuffle'; // import function directly

console.log(shuffle([ 1, 2, 3, 4, 5 ]));
```

### html

```html
<script src="/path/to/dist/utils.min.js"></script>
```

```js
var shuffle = window.utils.array.shuffle;
console.log(shuffle([ 1, 2, 3, 4, 5 ]));
```

* * *

## array

### shuffle

Shuffles an array.

```js
var arr = [ 1, 2, 3, 4, 5 ];
shuffle(arr); // also returns the shuffled array
console.log(arr);
```

## date

## number

## string

### deaccent

Deaccents a string by replacing unicode characters.

```js
var str = deaccent('Æ'); // returns "AE"
console.log({ str: str });
```

## other

### randId

Generates a random id.

```js
var id = randId(); // generates a random id, usually 5 to 6 chars
var id2 = randId(14); // generates a random id, 14 chars
console.log({ id: id, id2: id2 });
```

### rand

Random helper with multiple options.

```js
var r = rand(); // random float from 0 (inclusive) to 1 (exclusive)
var r2 = rand('string'); // random character from string
var r3 = rand([ 1, 2, 3, 4, 5 ]); // rand item from array
var r4 = rand(1, 4); // rand int from 1 (inclusive) to 4 (inclusive)
console.log({ r: r, r2: r2, r3: r3, r4: r4 });
```

### seqId

Generates a sequential id.

```js
var id = seqId(); // generates a sequential id starting with "a"
var id2 = seqId(3); // generates a sequential id starting with a minimum length of 3 -- "aaa"
var id3 = seqId('ZZZ'); // generates a sequential id starting after "ZZZ" -- "ZZ0"
console.log({ id: id, id2: id2, id3: id3 });
```
