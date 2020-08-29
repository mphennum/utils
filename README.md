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

Shuffles an array in place.

```js
var arr = [ 1, 2, 3, 4, 5 ];
shuffle(arr);
```

## date

## number

## string

## rand
