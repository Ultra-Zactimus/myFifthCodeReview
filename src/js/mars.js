export default function Mars(name, age, lifeExpectancy) {
  this.name = name;
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
}

Mars.prototype.amIGettingYoungYet = function () {
  let earthAge = parseInt(this.age);
  let inMarsDays = (earthAge * 365);
  let fountainOfYouth = Math.floor(inMarsDays / 687).toString();
  return fountainOfYouth;
};

Mars.prototype.gimmeSomeGoodNews = function () {

};