'use strict';

var randId = function randId(len) {
  var id = '';

  do {
    id += Math.floor(Math.random() * 0x7FFFFFFF).toString(36); // id += Math.random().toString(36).substr(2);
  } while (len && id.length < len);

  return id.substr(0, len);
};

module.exports = randId;
