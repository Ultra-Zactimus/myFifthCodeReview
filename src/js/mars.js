export default class Mars {
  constructor(name, age, lifeExpectancy) {
  this.name = name;
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
}
amIGettingYoungYet() {
  let earthAge = parseInt(this.age);
  let rng = parseInt(this.lifeExpectancy);
  let inMarsDays = (earthAge * 365);
  let inVenusTime = (rng * 365);
  let doesMarsHateMe = Math.floor(inVenusTime / 687);
  let fountainOfYouth = Math.floor(inMarsDays / 687).toString();
  const theMagicMoment = Math.abs((doesMarsHateMe - rng)).toString();
  return "Your age would be " + fountainOfYouth + " and your life expectancy would be " + theMagicMoment;
}
}