import Mercury from './../src/js/mercury.js';

describe('Mercury', () => {
  test('should create mercury object with name, age and life expectancy', () => {
    const mercury = new Mercury("Bob", '22', "64");
    expect(mercury).toEqual({"name":"Bob", "age": "22", "lifeExpectancy": "64"});
  });
});

describe('mercuryAge', () => {
  test('should return users earth age in mercury years', () => {
    const mercury = new Mercury("Bob", "22", "64");
    let earthAge = parseInt(mercury.age);
    let mercuryDays = (earthAge * 365);
    let mercuryAgeOld = Math.floor(mercuryDays / 88).toString();
    expect(earthAge).toEqual(22);
    expect(mercuryDays).toEqual(8030);
    expect(mercuryAgeOld).toEqual("91");
    expect(mercury.mercuryAge()).toEqual(mercuryAgeOld);
  });
});
describe('mercuryLifeExpectancy', () => {
  test('should return user life expectancy in mercury years', () => {
    const mercury = new Mercury("Bob", "22", "64");
    let life = parseInt(mercury.lifeExpectancy);
    let mercuryLife = (life * 365);
    let mercuryExpect = Math.floor(mercuryLife / 88).toString();
    const subNum = (expectMercury - expectEarth).toString();
    expect(life).toEqual(64);
    expect(mercuryLife).toEqual(23360);
    expect(mercuryExpect).toEqual("265")
    expect(mercury.mercuryLifeExpectancy()).toEqual(mercuryExpect);
  });
  describe('yearsUnderOrPast', () => {
    test('should return the years under or over life expectancy', () => {
      const mercury = new Mercury("Bob", "22", "64");
      let life = parseInt(mercury.lifeExpectancy);
      let mercuryLife = (life * 365);
      let mercuryExpect = Math.floor(mercuryLife / 88);
      const subNum = (mercuryExpect - mercuryLife).toString();
      expect(mercuryLife).toEqual(64);
      expect(mercuryExpect).toEqual(265);
      expect(subnum).toEqual("201");
      expect(mercury.yearsUnderOrPast()).toEqual(expectancy);
    });
  }); 
});
