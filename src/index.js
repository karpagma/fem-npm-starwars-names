'use strict';

const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
var cb;

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
