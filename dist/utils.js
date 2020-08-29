var utils = (function (exports) {
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

    var array = {
      shuffle: shuffle
    };

    var CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var CHARSLEN = CHARS.length;
    var charPos = {};

    for (var i = 0; i < CHARSLEN; ++i) {
      charPos[CHARS[i]] = i;
    }

    var lastId = null;

    var genId = function genId() {
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

    var randId = function randId(len) {
      var id = '';

      do {
        id += Math.floor(Math.random() * 0x7FFFFFFF).toString(36); // id += Math.random().toString(36).substr(2);
      } while (len && id.length < len);

      return id.substr(0, len);
    };

    var string = {
      genId: genId,
      randId: randId
    };

    exports.array = array;
    exports.string = string;

    return exports;

}({}));
