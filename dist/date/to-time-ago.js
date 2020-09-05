'use strict';

var toTimeAgo = function toTimeAgo(dt, _long) {
  if (_long === void 0) {
    _long = false;
  }

  if (!(dt instanceof Date)) {
    dt = new Date(dt);
  }

  var diff = (Date.now() - dt.getTime()) / 10000;

  if (diff < 6) {
    return (_long ? 'just ' : '') + "now";
  }

  if (diff < 360) {
    var _t = Math.floor(diff / 6);

    return _t + (_long ? " minute" + (_t > 1 ? 's' : '') : 'm');
  }

  if (diff < 8640) {
    var _t2 = Math.floor(diff / 360);

    return _t2 + (_long ? " hour" + (_t2 > 1 ? 's' : '') : 'h');
  }

  if (diff < 3153600) {
    var _t3 = Math.floor(diff / 8640);

    return _t3 + (_long ? " day" + (_t3 > 1 ? 's' : '') : 'd');
  }

  var t = Math.floor(diff / 3153600);
  return t + (_long ? " year" + (t > 1 ? 's' : '') : 'y');
};

module.exports = toTimeAgo;
