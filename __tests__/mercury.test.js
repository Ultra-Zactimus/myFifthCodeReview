import Mercury from './../src/js/mercury.js';

describe('Mercury', () => {
  test('should create mercury object with name, age and life expectancy', () => {
    const mercury = new Mercury("Bob", '22', "64");
    expect(mercury).toEqual({"name":"Bob", "age": "22", "lifeExpectancy": "64"});
  });
});

describe('whatYearIsIt', () => {
  test('should return users earth age in mercury years', () => {
    const mercury = new Mercury("Bob", "22", "64");
    let earthAge = parseInt(mercury.age);
    let inMercuryDays = (earthAge * 365);
    let amIAncient = Math.floor(inMercuryDays / 88).toString();
    expect(earthAge).toEqual(22);
    expect(inMercuryDays).toEqual(8030);
    expect(amIAncient).toEqual("91");
    expect(mercury.whatYearIsIt()).toEqual(amIAncient);
  });
});
describe('luckBeALady', () => {
  test('should return user life expectancy in mercury years', () => {
    const mercury = new Mercury("Bob", "22", "64");
    let whenAngelsFly = parseInt(mercury.lifeExpectancy);
    let inMercuryTime = (whenAngelsFly * 365);
    let doesMercuryHateMe = Math.floor((inMercuryTime / 88));
    const wouldIBeDead = Math.abs((doesMercuryHateMe - whenAngelsFly)).toString();
    expect(whenAngelsFly).toEqual(64);
    expect(inMercuryTime).toEqual(23360);
    expect(doesMercuryHateMe).toEqual(265);
    expect(wouldIBeDead).toEqual("201");
    expect(mercury.luckBeALady()).toEqual(wouldIBeDead);
  });
});