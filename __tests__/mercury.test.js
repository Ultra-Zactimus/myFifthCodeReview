import { TestScheduler } from 'jest';
import Mercury from './../src/js/mercury.js';

describe(Mercury, () => {
  test('should create new mercury object with name and age', () => {
    const mercury = new Mercury("Bob", '22');
    expect(mercury.name).toEqual("Bob");
    expect(mercury.age).toEqual("22");

  });
});