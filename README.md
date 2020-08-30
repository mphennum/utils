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
$ npm install @mph/utils
```

```js
import utils from '@mph/utils'; // import entire utils library
// or
import { array } from '@mph/utils'; // import sub libraries
// or
import { shuffle } from '@mph/utils/dist/array'; // import function from sub library
// or
import shuffle from '@mph/utils/dist/array/shuffle'; // import function directly
```

### html

```html
<script src="/path/to/dist/utils.min.js"></script>
```

```js
var shuffle = window.utils.array.shuffle;
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

## other

### randId

Generates a random id.

```js
randId(); // generates a random id, usually 5 to 6 chars
randId(14); // generates a random id, 14 chars
```

### rand

Random helper with multiple options.

```js
rand(); // random float from 0 (inclusive) to 1 (exclusive)
rand('string'); // random character from string
rand([ 1, 2, 3, 4, 5 ]); // rand item from array
rand(1, 4); // rand int from 1 (inclusive) to 4 (inclusive)
```
