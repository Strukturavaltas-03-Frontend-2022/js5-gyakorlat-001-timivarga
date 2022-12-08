


const Walker = (name, state) => {
    this.name = 'John Doe';
    this.state = 'dead';
};
Walker.prototype.walk = function (speedInMph) {
    this.speedInMph = 10;
    return (`${this.name} + ' the ' + ${this.state} + ' walks with ' + ${speedInMph} + ' mph!'`);

};
Walker.prototype.eat = function (foodName) {
    this.foodName = "meat";
    return (`${this.name} + ' the ' + ${this.state} + ' eats ' + ${foodName} + '!'`)
};
Walker.prototype.speak = function (sound) {
    this.sound = "grrrrrr";
    return (`${this.name} + ' the ' + ${this.state} + ' says ' + ${sound} + '!'`)
};

Walker.prototype.speak = function (sound = 'grrrrrr') {
    return `${this.name} the ${this.state} says ${sound}!`;
};



Object.defineProperty(Walker.prototype, 'firstName', {
    get() {
        return this.name.split(' ')[0];
    },
    set(value) {
        this.name = `${value} ${this.name.split(' ')[1]}`;
    },
});

Object.defineProperty(Walker.prototype, 'lastName', {
    get() {
        return this.name.split(' ')[1];
    },
    set(value) {
        this.name = `${this.name.split(' ')[0]} ${value}`;
    },
});








export default Walker;