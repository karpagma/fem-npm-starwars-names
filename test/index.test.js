import { expect } from 'chai';
import starWarsNames from '../src';

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(starWarsNames.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', () => {
    expect(starWarsNames.random()).to.satisfy(isIncludedIn(starWarsNames.all));
  });

  it('should return first name', () => {
    expect(starWarsNames.getFirstName()).to.equal(starWarsNames.all[0]);
  });

  it('should return second name', () => {
    expect(starWarsNames.getSecondName()).to.equal(starWarsNames.all[1]);
  });
});

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string');
}

function isIncludedIn(array) {
  return item => array.includes(item);
}
