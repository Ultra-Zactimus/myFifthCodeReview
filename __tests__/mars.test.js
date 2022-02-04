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