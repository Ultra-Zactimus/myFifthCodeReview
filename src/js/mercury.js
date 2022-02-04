export default function Mercury(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  Mercury.prototype.mercuryAge = function () {
    let earthAge = parseInt(this.age);
    let mercuryDays = (earthAge * 365);
    let mercuryAgeOld = (mercuryDays / 88);
    return "mercuryAgeOld";
  };
