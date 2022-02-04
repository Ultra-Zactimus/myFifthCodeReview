import Mars from './../src/js/mars.js';

describe('Mars', () => {
  test('should create an object of venus with name, age and life expectancy', () => {
    const mars = new Mars("Fatima", "35", "77");
    expect(mars).toEqual({"name": "Fatima", "age": "35", "lifeExpectancy": "77"});
  });
});
describe('amIGettingYoungYet', () => {
  test('should give age in Mars Years', () => {
    const mars = new Mars("Fatima", "35", "77");
    let earthAge = parseInt(mars.age);
    let inMarsDays = (earthAge * 365);
    let fountainOfYouth = Math.floor(inMarsDays / 687).toString();
    expect(earthAge).toEqual(35);
    expect(inMarsDays).toEqual(12775);
    expect(fountainOfYouth).toEqual("18");
    expect(mars.amIGettingYoungYet()).toEqual(fountainOfYouth);
  });
});
describe('gimmeSomeGoodNews', () => {
  test('should give life expectancy in Mars Years', () => {
    const mars = new Mars("Fatima", "35", "77");
    let rng = parseInt(mars.lifeExpectancy);
    let inVenusTime = (rng * 365);
    let doesMarsHateMe = Math.floor(inVenusTime / 687);
    const theMagicMoment = Math.abs((doesMarsHateMe - rng)).toString();
    expect(rng).toEqual(77);
    expect(inVenusTime).toEqual(28105);
    expect(doesMarsHateMe).toEqual(40);
    expect(theMagicMoment).toEqual("37");
    expect(mars.gimmeSomeGoodNews()).toEqual(theMagicMoment);
  });
});