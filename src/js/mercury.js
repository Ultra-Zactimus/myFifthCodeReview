export default class Mercury {
  constructor(name, age, lifeExpectancy) {
  this.name = name;
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
}
whatYearIsIt() {
  let earthAge = parseInt(this.age);
  let whenAngelsFly = parseInt(this.lifeExpectancy);
  let inMercuryDays = (earthAge * 365);
  let inMercuryTime = (whenAngelsFly * 365);
  let amIAncient = Math.floor(inMercuryDays / 88).toString();
  let doesMercuryHateMe = Math.floor(inMercuryTime / 88);
  const wouldIBeDead = Math.abs((doesMercuryHateMe - whenAngelsFly)).toString();
  return "Your age would be " + amIAncient + " and your life expectancy would be " + wouldIBeDead;
}
}