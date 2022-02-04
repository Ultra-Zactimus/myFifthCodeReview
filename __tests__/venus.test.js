import Venus from './../src/js/venus.js';

describe('Venus', ()=> {
test('it should create a venus object with name, age and life expectancy', () => {
  const venus = new Venus("Suzy", "43", "82");
  expect(venus).toEqual({"name": "Suzy", "age": "43", "lifeExpectancy": "82"});
}); 
});