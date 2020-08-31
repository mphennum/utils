'use strict';

var toOrdinal = function toOrdinal(num) {
  var ord;
  var abs = Math.abs(num);
  var rem = abs % 100;

  if (rem < 11 || rem > 13) {
    rem = abs % 10;

    if (rem === 1) {
      ord = 'st';
    } else if (rem === 2) {
      ord = 'nd';
    } else if (rem === 3) {
      ord = 'rd';
    }
  }

  return "" + num + (ord || 'th');
};

module.exports = toOrdinal;
