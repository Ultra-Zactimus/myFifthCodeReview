export default function Venus (name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
}

Venus.prototype.timeWarp = function () {
    let earthAge = parseInt(this.age);
    let whatTheDocSaid = parseInt(this.lifeExpectancy);
    let inVenusDays = (earthAge * 365);
    let inVenusTime = (whatTheDocSaid * 365);
    let areWeThereYet = Math.floor(inVenusDays / 225).toString();
    let doesVenusHateMe = Math.floor(inVenusTime / 225);
    const drumRoll = Math.abs((doesVenusHateMe - whatTheDocSaid)).toString();
    return "Your age would be " + areWeThereYet + "and your life expectancy would be " + drumRoll;
};