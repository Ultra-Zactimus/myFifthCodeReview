export default function Mercury(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  Mercury.prototype.mercuryAge = function () {
    let earthAge = parseInt(this.age);
    let mercuryDays = (earthAge * 365);
    let mercuryAgeOld = Math.floor(mercuryDays / 88).toString();
    return mercuryAgeOld;
  };

  Mercury.prototype.mercuryLifeExpectancy = function () {
    let life = parseInt(this.lifeExpectancy);
    let mercuryLife = (life * 365);
    let mercuryExpect = Math.floor(mercuryLife / 88).toString();
    return mercuryExpect;
  };

  Mercury.prototype.yearsUnderOrPast = function () {

  };