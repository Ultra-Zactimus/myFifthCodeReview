import Mercury from './../src/js/mercury.js';

describe('Mercury', () => {
  test('should create mercury object with name, age and life expectancy', () => {
    const mercury = new Mercury("Bob", '22', "64");
    expect(mercury).toEqual({"name":"Bob", "age": "22", "lifeExpectancy": "64"});
  });
});