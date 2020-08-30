# utils

Javascript utilities for strings, numbers, dates, etc.

[Examples](./examples.html)

## table of contents

- [installing](#installing)
- [array](#array)
- [date](#date)
- [number](#number)
- [string](#string)
- [rand](#rand)

* * *

## installing

### npm

```bash
$ npm install @mph/utils
```

```js
import utils from '@mph/utils'; // import entire utils library
// or
import { array, date, number, string, rand } from '@mph/utils'; // import sub libraries
// or
import { shuffle } from '@mph/utils/dist/array'; // import individual functions
```

### html

```html
<script src="/path/to/dist/utils.min.js"></script>
```

```js
var utils = window.utils;
var array = utils.array;
var date = utils.date;
var number = utils.number;
var string = utils.string;
var rand = utils.rand;
```

* * *

## array

### shuffle

Shuffles an array.

```js
shuffle([ 1, 2, 3, 4, 5 ]);
```

## date

## number

## string

## rand

Random helper with multiple options.

```js
rand(); // random float from 0 (inclusive) to 1 (exclusive)
rand('string'); // random character from string
rand([ 1, 2, 3, 4, 5 ]); // rand item from array
rand(1, 4); // rand int from 1 (inclusive) to 4 (inclusive)
```
