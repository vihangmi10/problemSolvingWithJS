const elf = {
    name: 'legolas',
    weapon: 'bow',
    attack() {
        return `${this.name} attacks with ${this.weapon}`;
    },
    changeWeapon(newWeapon) {
        let oldWeapon = this.weapon;
        this.weapon = newWeapon;
        return `weapon changed from ${oldWeapon} to ${newWeapon}`;
    }
};
// If we want to create another elf we can simply copy paste the code and change the name of object
// name of the elf

const elf2 = {
    name: 'Ela',
    weapon: 'bow',
    attack() {
        return `${this.name} attacks with ${this.weapon}`;
    },
    changeWeapon(newWeapon) {
        let oldWeapon = this.weapon;
        this.weapon = newWeapon;
        return `weapon changed from ${oldWeapon} to ${newWeapon}`;
    }
};
// console.log(elf.attack());
// console.log(elf2.attack());
// console.log(elf.changeWeapon( 'sword'));
// console.log(elf2.changeWeapon('javelin'));
//  Too much repeating code and to avoid that we can use FACTORY FUNCTION. A function that creates similar objects.

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack(){
            return `attack with weapon ${weapon}`;
        }
    }
}
// let legolas = createElf('legolas', 'bow');
// console.log(legolas.attack());
// let Ela = createElf('Ela', 'fire');
// console.log(Ela.attack());

// Common functions still getting added to the memory each time a elf is created. Then how to
// remove common methods outside

// One way is creating some kind of function store which can add methods to each elf.

const elfFunctionStore = {
    attack: function () {
        return `attack with ` + this.weapon
    }
};
function createElf(name, weapon) {
    return {
        name,
        weapon
    }
}
let legolas = createElf('legolas', 'bow');
legolas.attack = elfFunctionStore.attack;
console.log(legolas.attack());

// To avoid attaching methods manually we can use Object.create
function createElf2(name, weapon) {
    let newElf = Object.create(elfFunctionStore);
        newElf.name = name;
        newElf.weapon = weapon;
        return newElf;
}
let Eva = createElf2('Eva', 'wind');
console.log(Eva.attack());

// Before object,create developers used function constructors

function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
// Prototype property or object of constructor function can be used to define methods and properties
// common to all elves
Elf.prototype.attack = function () {
    return 'Attacks with ' + this.weapon;
};
Elf.prototype.build = function () {
    function building ()  {
        return this.name + 'Build a house';
    }
    return building.call(this);
};

const elderon = new Elf('elderon', 'Sword');
console.log(`I am Lord ${elderon.name} and I use ${elderon.weapon}`);
console.log(elderon.attack());
console.log(elderon.build());


class Elves {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `${this.name} attacks with ${this.weapon}`;
    }
    build() {
        return `${this.name} builds house`;
    }
}
class WorkerElves extends Elves {
    constructor(name, weapon, buildWeapon) {
        super(name, weapon);
        this.buildWeapon = buildWeapon;
    }
    buildWeapons () {
        return `${this.name} builds weapons using ${this.buildWeapon} and he also knows to use weapon ${this.weapon}`;
    }
}
const taniya = new Elves('taniya', 'long bow');
console.log('Taniya --- ', taniya.attack());
console.log('Who builds the house ???? ', taniya.build());
// Learning to use Extends keyword in classes
// Worker class has properties same as elves but with a difference that they can buildweapons which not elves can do.
const john = new WorkerElves('john', 'axe', 'hammer');
console.log('Name of worker elf --- ', john.name);
console.log('Weapon a worker elf uses --- ', john.weapon);
console.log('How he builds --- ', john.buildWeapons());
console.log('Prototype of John ---- ', john.__proto__.__proto__);
console.log('Let it attack --- ', john.attack());
// if I create an Elf from parent elf class then it will not be able to build weapon
const hritik = new Elf('Hritik', 'Wand');
//console.log('Can Hritik build weapon ---- ', hritik.buildWeapons());


class Animal  {
    constructor(name, speed, motionPart) {
        this.name = name;
        this.speed = speed;
        this.motionPart = motionPart;
    }
    run() {
        return `${this.name} runs with a speed of ${this.speed} using ${this.motionPart}`;
    }
}

class Dog extends Animal{
   bark() {
        return `Woooh Woooh my name is ${this.name}`;
   }
}

const drogo = new Dog('Chow Chow', 27, 'legs');
console.log(drogo.__proto__);
console.log(drogo.name);
console.log(drogo.run());
console.log(drogo.bark());

class mamals {
    constructor(mamalType, locomotivePart) {
        this.mamalType = mamalType;
        this.locomotivePart = locomotivePart;
        this.warmBlood = true;
    }

    locomotion() {
        return `${this.name} moves using ${this.locomotivePart}`
    }
    isVertibrate() {
        if(this.locomotivePart === 'legs') {
            return `Yes this mamal is a vertibrate`;
        } else {
            return `No this mamal doesn't have spinal chord`;
        }
    }
    sound() {
        return `${this.mamalType} makes `;
    }
}

class whale extends mamals {
    constructor(mamalType, locomotivePart) {
        super(mamalType, locomotivePart);
    }
    sound(type) {
        if (type) return super.sound() + `${type} noise`;
    }
}
const dumpy = new whale('Fish', 'Fins');
console.log('Is dumpy a vertibrate ---- ', dumpy.isVertibrate());
console.log('What is the prototype of dumpy ---- ', dumpy.__proto__);
console.log('Is dumpy warm blooded ----- ', dumpy.warmBlood);
console.log('Making sound ----- ', dumpy.sound('ultrasonic'));
