import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getFirstName = () => starWarsNames[0];

const main = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
  getFirstName: getFirstName
};

export default main;
module.exports = main;
