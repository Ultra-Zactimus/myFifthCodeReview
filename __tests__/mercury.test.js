import Mercury from './../src/js/mercury.js';

describe('Mercury', () => {
  test('should create mercury object with name, age and life expectancy', () => {
    const mercury = new Mercury();
    expect(mercury).toEqual({
      "name": undefined,
      "age": undefined,
      "lifeExpectancy": undefined
    });
  });
});

describe('whatYearIsIt', () => {
  test('should give age and life expectancy in Mercury Years', () => {
    const mercury = new Mercury();
    mercury.name = "Bob";
    mercury.age = "22";
    mercury.lifeExpectancy = "64";
    let earthAge = parseInt(mercury.age);
    let whenAngelsFly = parseInt(mercury.lifeExpectancy);
    let inMercuryDays = (earthAge * 365);
    let inMercuryTime = (whenAngelsFly * 365);
    let amIAncient = Math.floor(inMercuryDays / 88).toString();
    let doesMercuryHateMe = Math.floor((inMercuryTime / 88));
    const wouldIBeDead = Math.abs((doesMercuryHateMe - whenAngelsFly)).toString();
    expect(earthAge).toEqual(22);
    expect(inMercuryDays).toEqual(8030);
    expect(amIAncient).toEqual("91");
    expect(whenAngelsFly).toEqual(64);
    expect(inMercuryTime).toEqual(23360);
    expect(doesMercuryHateMe).toEqual(265);
    expect(wouldIBeDead).toEqual("201");
    expect(mercury.whatYearIsIt()).toEqual("Your age would be " + amIAncient + " and your life expectancy would be " + wouldIBeDead);
  });
});