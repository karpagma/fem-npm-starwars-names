import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getFirstName = () => starWarsNames[0];
const getSecondName = () => starWarsNames[1];

const main = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
  getFirstName: getFirstName,
  getSecondName: getSecondName
};

export default main;
module.exports = main;
