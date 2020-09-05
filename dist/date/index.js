'use strict';

var format = require('./format.js');
var toTimeAgo = require('./to-time-ago.js');

var date = {
  format: format,
  toTimeAgo: toTimeAgo
};

module.exports = date;
