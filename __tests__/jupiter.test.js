import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should create an object with name, age and life expectancy', ()=> {
    const jupiter = new Jupiter("Makoto", "66", "102");
    expect(jupiter).toEqual({"name": "Makoto", "age": "66", "lifeExpectancy": "102"});
  });
});

describe('timeParadox', () => {
  test('should give age and life expectancy in Jupiter Years', ()=> {
    const jupiter = new Jupiter("Makoto", "66", "102");
    let earthAge = parseInt(jupiter.age);
    let dyingToLive = parseInt(jupiter.lifeExpectancy);
    let inJupiterDays = (earthAge * 365);
    let inJupiterTime = (dyingToLive * 365);
    let whatIsExistence = Math.floor(inJupiterDays / 4380).toString();
    let doesJupiterHateMe = Math.floor(inJupiterTime / 4380);
    const starChild = Math.abs((doesJupiterHateMe - dyingToLive)).toString();
    expect(earthAge).toEqual(66);
    expect(inJupiterDays).toEqual(24090);
    expect(whatIsExistence).toEqual("5");
    expect(dyingToLive).toEqual(102);
    expect(inJupiterTime).toEqual(37230);
    expect(doesJupiterHateMe).toEqual(8);
    expect(starChild).toEqual("94");
    expect(jupiter.timeParadox()).toEqual("Your age would be " + whatIsExistence + "and your life expectancy would be " + starChild);
  });
});