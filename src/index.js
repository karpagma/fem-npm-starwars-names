'use strict';

const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
var cb;
const t;

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
