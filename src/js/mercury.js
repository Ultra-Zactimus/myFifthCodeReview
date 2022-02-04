export default function Mercury(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  Mercury.prototype.whatYearIsIt = function () {
    let earthAge = parseInt(this.age);
    let inMercuryDays = (earthAge * 365);
    let amIAncient = Math.floor(inMercuryDays / 88).toString();
    return amIAncient;
  };

  Mercury.prototype.luckBeALady = function () {
    let whenAngelsFly = parseInt(this.lifeExpectancy);
    let inMercuryTime = (whenAngelsFly * 365);
    let doesMercuryHateMe = Math.floor(inMercuryTime / 88);
    const wouldIBeDead = (doesMercuryHateMe - whenAngelsFly).toString();
    return wouldIBeDead;
  };