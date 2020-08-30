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

    var string = {};

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

    var randId = function randId(len) {
      var id = '';

      do {
        id += Math.floor(Math.random() * 0x7FFFFFFF).toString(36); // id += Math.random().toString(36).substr(2);
      } while (len && id.length < len);

      return id.substr(0, len);
    };

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

    exports.array = array;
    exports.rand = rand;
    exports.randId = randId;
    exports.seqId = seqId;
    exports.string = string;

    return exports;

}({}));
