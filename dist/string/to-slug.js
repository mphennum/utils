'use strict';

var deaccent = require('./deaccent.js');

var toSlug = function toSlug(str) {
  return deaccent(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^\-|\-$/g, '');
};

module.exports = toSlug;
