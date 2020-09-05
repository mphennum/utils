'use strict';

var CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var CHARSLEN = CHARS.length;
var FIRSTCHAR = CHARS[0];
var LASTCHAR = CHARS[CHARSLEN - 1];
var charPos = {};

for (var i = 0; i < CHARSLEN; ++i) {
  charPos[CHARS[i]] = i;
}

var lastId = null;

var seqId = function seqId(min) {
  if (min) {
    if (typeof min === 'number' && (!lastId || lastId.length < min)) {
      lastId = '';

      for (var _i = 0; _i < min - 1; _i++) {
        lastId += LASTCHAR;
      }
    } else if (typeof min === 'string') {
      for (var _i2 = 0; _i2 < min.length; _i2++) {
        if (!CHARS.includes(min[_i2])) {
          throw new Error("Invalid char \"" + min[_i2] + "\"");
        }
      }

      lastId = min;
    }
  }

  if (!lastId) {
    lastId = FIRSTCHAR;
    return lastId;
  }

  var i = lastId.length - 1;

  for (; i > -1; i--) {
    var pos = charPos[lastId[i]] + 1;

    if (pos < CHARSLEN) {
      lastId = lastId.substr(0, i) + CHARS[pos] + lastId.substr(i + 1);
      break;
    }

    lastId = lastId.substr(0, i) + FIRSTCHAR + lastId.substr(i + 1);
  }

  if (i === -1) {
    lastId += FIRSTCHAR;
  }

  return lastId;
};

module.exports = seqId;
