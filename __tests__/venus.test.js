import Venus from './../src/js/venus.js';

describe('Venus', () => {
  test('it should create a venus object with name, age and life expectancy', () => {
    const venus = new Venus("Suzy", "43", "82");
    expect(venus).toEqual({
      "name": "Suzy",
      "age": "43",
      "lifeExpectancy": "82"
    });
  });
});
describe('timeWarp', () => {
  test('should return age in Venus years', () => {
    const venus = new Venus("Suzy", "43", "82");
    let earthAge = parseInt(venus.age);
    let whatTheDocSaid = parseInt(venus.lifeExpectancy);
    let inVenusDays = (earthAge * 365);
    let inVenusTime = (whatTheDocSaid * 365);
    let areWeThereYet = Math.floor(inVenusDays / 225).toString();
    let doesVenusHateMe = Math.floor(inVenusTime / 225);
    const drumRoll = Math.abs((doesVenusHateMe - whatTheDocSaid)).toString();
    expect(earthAge).toEqual(43);
    expect(inVenusDays).toEqual(15695);
    expect(areWeThereYet).toEqual("69");
    expect(whatTheDocSaid).toEqual(82);
    expect(inVenusTime).toEqual(29930);
    expect(doesVenusHateMe).toEqual(133);
    expect(venus.timeWarp()).toEqual("Your age would be " + areWeThereYet + "and your life expectancy would be " + drumRoll);
  });
});
