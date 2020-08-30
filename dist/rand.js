'use strict';

var rand = function rand() {
  // 0 args
  if (!arguments.length) {
    return Math.random(); // float from 0 (inc) to 1 (exc)
  } // 1 arg


  var x = arguments.length <= 0 ? undefined : arguments[0];

  if (arguments.length < 2) {
    if (Array.isArray(x) || typeof x === 'string') {
      // arr / str
      return x.length ? x[rand(0, x.length - 1)] : null; // rand item / char
    }

    throw new Error('Expected single Array or String param for rand.');
  } // 2 args


  var y = arguments.length <= 1 ? undefined : arguments[1];

  if (arguments.length < 3) {
    if (typeof x === 'number' && typeof y === 'number') {
      // 2 ints
      return Math.floor(Math.random() * (y - x + 1) + x); // rand int from x (inc) to y (inc)
    }

    throw new Error('Expected two Number params for rand..');
  } // invalid


  throw new Error('Expected less than three params for rand.');
};

module.exports = rand;
