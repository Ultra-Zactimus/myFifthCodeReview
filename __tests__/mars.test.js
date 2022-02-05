import Mars from './../src/js/mars.js';

describe('Mars', () => {
  test('should create an object of venus with name, age and life expectancy', () => {
    const mars = new Mars("Fatima", "35", "77");
    expect(mars).toEqual({"name": "Fatima", "age": "35", "lifeExpectancy": "77"});
  });
});
describe('amIGettingYoungYet', () => {
  test('should give age and life expectancy in Mars Years', () => {
    const mars = new Mars("Fatima", "35", "77");
    let earthAge = parseInt(mars.age);
    let rng = parseInt(mars.lifeExpectancy);
    let inMarsDays = (earthAge * 365);
    let inVenusTime = (rng * 365);
    let fountainOfYouth = Math.floor(inMarsDays / 687).toString();
    let doesMarsHateMe = Math.floor(inVenusTime / 687);
    const theMagicMoment = Math.abs((doesMarsHateMe - rng)).toString();
    expect(earthAge).toEqual(35);
    expect(inMarsDays).toEqual(12775);
    expect(fountainOfYouth).toEqual("18");
    expect(rng).toEqual(77);
    expect(inVenusTime).toEqual(28105);
    expect(doesMarsHateMe).toEqual(40);
    expect(theMagicMoment).toEqual("37");
    expect(mars.amIGettingYoungYet()).toEqual("Your age would be " + fountainOfYouth + "and your life expectancy would be " + theMagicMoment);
  });
});