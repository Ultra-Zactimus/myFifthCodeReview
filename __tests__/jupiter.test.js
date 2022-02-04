import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should create an object with name, age and life expectancy', ()=> {
    const jupiter = new Jupiter("Makoto", "66", "102");
    expect(jupiter).toEqual({"name": "Makoto", "age": "66", "lifeExpectancy": "102"});
  });
});

describe('timeParadox', () => {
  test('should return age and in Jupiter Years', ()=> {
    const jupiter = new Jupiter("Makoto", "66", "102");
    let earthAge = parseInt(jupiter.age);
    let inJupiterDays = (earthAge * 365);
    let whatIsExistence = Math.floor(inJupiterDays / 4380).toString();
    expect(earthAge).toEqual(66);
    expect(inJupiterDays).toEqual(24090);
    expect(whatIsExistence).toEqual("5");
    expect(jupiter.timeParadox()).toEqual(whatIsExistence);
  });
});