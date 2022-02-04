import Mars from './../src/js/mars.js';

describe('Mars', () => {
  test('should create an object of venus with name, age and life expectancy', () => {
    const mars = new Mars("Fatima", "35", "77");
    expect(mars).toEqual({"name": "Fatima", "age": "35", "lifeExpectancy": "77"});
  });
});