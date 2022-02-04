import Venus from './../src/js/venus.js';

describe('Venus', ()=> {
  test('it should create a venus object with name, age and life expectancy', () => {
    const venus = new Venus("Suzy", "43", "82");
    expect(venus).toEqual({"name": "Suzy", "age": "43", "lifeExpectancy": "82"});
  }); 
});
describe('timeWarp', () => {
  test('should return age in Venus years', () => {
    const venus = new Venus("Suzy", "43", "82");
    let earthAge = parseInt(venus.age);
    let inVenusDays = (earthAge * 365);
    let areWeThereYet = Math.floor(inVenusDays / 225).toString();
    expect(earthAge).toEqual(43);
    expect(inVenusDays).toEqual(15695);
    expect(areWeThereYet).toEqual("69");
    expect(venus.timeWarp()).toEqual(areWeThereYet);
  });
});
describe('mercyMe', () => {
  test('should return life expectancy in Venus Years', () => {
    const venus = new Venus("Suzy", "43", "82");
    let whatTheDocSaid = parseInt(venus.lifeExpectancy);
    let inVenusTime = (whatTheDocSaid * 365);
    let doesVenusHateMe = Math.floor(inVenusTime / 225);
    const drumRoll = (doesVenusHateMe - whatTheDocSaid).toString();
    expect(whatTheDocSaid).toEqual(82);
    expect(inVenusTime).toEqual(29930);
    expect(doesVenusHateMe).toEqual(133);
    expect(venus.mercyMe()).toEqual(drumRoll);
  });
});