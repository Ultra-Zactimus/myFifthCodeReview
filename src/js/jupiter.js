export default class Jupiter {
  contructor (name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
}
timeParadox() {
  let earthAge = parseInt(this.age);
  let dyingToLive = parseInt(this.lifeExpectancy);
  let inJupiterDays = (earthAge * 365);
  let inJupiterTime = (dyingToLive * 365);
  let whatIsExistence = Math.floor(inJupiterDays / 4380).toString();
  let doesJupiterHateMe = Math.floor(inJupiterTime / 4380);
  const starChild = Math.abs((doesJupiterHateMe - dyingToLive)).toString();
  return "Your age would be " + whatIsExistence + " and your life expectancy would be " + starChild;
}
}
