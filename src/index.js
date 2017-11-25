import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getFirst = () => starWarsNames[0];

const main = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
  getFirst: getFirst
};

export default main;
module.exports = main;
