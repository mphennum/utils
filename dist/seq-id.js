'use strict';

var CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var CHARSLEN = CHARS.length;
var charPos = {};

for (var i = 0; i < CHARSLEN; ++i) {
  charPos[CHARS[i]] = i;
}

var lastId = null;

var seqId = function seqId() {
  if (!lastId) {
    lastId = CHARS[0];
    return lastId;
  }

  var i = lastId.length - 1;

  for (; i > -1; i--) {
    var pos = charPos[lastId[i]] + 1;

    if (pos < CHARSLEN) {
      lastId = lastId.substr(0, i) + CHARS[pos] + lastId.substr(i + 1);
      break;
    }

    lastId = lastId.substr(0, i) + CHARS[0] + lastId.substr(i + 1);
  }

  if (i === -1) {
    lastId += CHARS[0];
  }

  return lastId;
};

module.exports = seqId;
