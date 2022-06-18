const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor (name, weapon) {
        super(name);
    

        this.potion = new Potion();
        this.weapon = weapon;
        
    }
}

Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;