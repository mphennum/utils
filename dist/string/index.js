'use strict';

var deaccent = require('./deaccent.js');
var toSlug = require('./to-slug.js');

var string = {
  deaccent: deaccent,
  toSlug: toSlug
};

module.exports = string;
