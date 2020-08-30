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
    var FIRSTCHAR = CHARS[0];
    var LASTCHAR = CHARS[CHARSLEN - 1];
    var charPos = {};

    for (var i = 0; i < CHARSLEN; ++i) {
      charPos[CHARS[i]] = i;
    }

    var lastId = null;

    var seqId = function seqId(min) {
      if (min) {
        var _lastId;

        if (typeof min === 'number' && (!lastId || ((_lastId = lastId) === null || _lastId === void 0 ? void 0 : _lastId.length) < min)) {
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

    exports.array = array;
    exports.rand = rand;
    exports.randId = randId;
    exports.seqId = seqId;
    exports.string = string;

    return exports;

}({}));
