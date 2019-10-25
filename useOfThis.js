// Implicit Binding of this keyword
const person = {
    name: 'Vihang',
    age: 27,
    game() {
        return `${this.name} plays cricket` // this keyword is automatically
        // bound to person object. That is how JS works!
    }
};

console.log(person.game());

// Explicit Binding when we tell it to bind to an object

const run = function () {
    return `${this.name} runs fast even at the age of ${this.age}`
};
// Here this points to the global object
console.log(run.call(person));
console.log(run.apply(person));
const vihangRuns = run.bind(person);
console.log(vihangRuns());

// Use of Arrow Functions:
// Arrow function binds this lexically and not dynamically
// where it is written will determine where this will point to
// and not who is calling it

const player = {
    name: 'Vihang',
    sport: 'Cricket',
    plays() {
        const bats = () => {
            return `In the ${this.sport} ${this.name} bats well`
            // By using normal function this would refer to global
            // object
            // Using arrow function this refers to the object
            // in which the function is written
        };
        return bats();
    }
};

console.log(player.plays());

// Binding this with new keyword
function constructPlayer (name, sport) {
    this.name = name;
    this.sport = sport;
}
// Here this creates a new object and points to that new object
// and this new object is assigned to vihang variable name
const vihang = new constructPlayer('Vihang', 'Cricket');
console.log('Object created is --- ', vihang);
