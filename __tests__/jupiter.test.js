import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should create an object with name, age and life expectancy', ()=> {
    const jupiter = new Jupiter("Makoto", "66", "102");
    expect(jupiter).toEqual({"name": "Makoto", "age": "66", "lifeExpectancy": "102"});
  });
});