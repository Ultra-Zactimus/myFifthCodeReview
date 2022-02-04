import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should create an object with name and age from constructor', ()=> {
    const jupiter = new Jupiter("Makoto", "66");
    expect(jupiter).toEqual({"name": "Makoto", "age": "66"});
  });
});