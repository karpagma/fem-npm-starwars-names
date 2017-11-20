import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const main = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};

export default main;
module.exports = main;
