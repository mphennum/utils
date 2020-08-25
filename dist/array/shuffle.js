'use strict';

var shuffle = function shuffle(arr) {
  var cur = arr.length;

  while (cur) {
    var rand = Math.floor(Math.random() * cur);
    cur--;
    var tmp = arr[cur];
    arr[cur] = arr[rand];
    arr[rand] = tmp;
  }

  return arr;
};

module.exports = shuffle;
