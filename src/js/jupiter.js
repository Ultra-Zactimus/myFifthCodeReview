export default function Jupiter(name, age, lifeExpectancy) {
  this.name = name;
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
}

Jupiter.prototype.timeParadox = function () {
  let earthAge = parseInt(this.age);
  let inJupiterDays = (earthAge * 365);
  let whatIsExistence = Math.floor(inJupiterDays / 4380).toString();
  return whatIsExistence;
};

Jupiter.prototype.timeAbhorsAParadox = function () {
  let dyingToLive = parseInt(this.lifeExpectancy);
  let inJupiterTime = (dyingToLive * 365);
  let doesJupiterHateMe = Math.floor(inJupiterTime / 4380);
  const starChild = Math.abs((doesJupiterHateMe - dyingToLive)).toString();
  return starChild;
};