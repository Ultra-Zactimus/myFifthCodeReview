import Mars from './../src/js/mars.js';

describe('Mars', () => {
  test('should create an object of venus with name and age', () => {
    const mars = new Mars("Fatima", "35");
    expect(mars).toEqual({"name": "Fatima", "age": "35"});
  });
});