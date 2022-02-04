export default function Venus (name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
}

Venus.prototype.timeWarp = function () {
    let earthAge = parseInt(this.age);
    let inVenusDays = (earthAge * 365);
    let areWeThereYet = Math.floor(inVenusDays / 225).toString();
    return areWeThereYet;
};

Venus.prototype.mercyMe = function () {
    
};