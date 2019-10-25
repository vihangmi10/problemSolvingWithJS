const wizard = {
    name: 'Merlin',
    health: 100,
    heal(medicine1, medicine2) {
        return this.health += medicine1 + medicine2;
    }
};

const archer = {
    name: 'Vihang',
    health: 30
};
// To borrow a method from wizard object by archer object it can use
// call
console.log('Health of the archer before call --- ', archer.health);
wizard.heal.call(archer, 30, 20);
console.log('Health of the archer after call --- ', archer.health);
console.log('Health of the archer before apply --- ', archer.health);
wizard.heal.apply(archer, [40, 30]);
console.log('Health of the archer after apply --- ', archer.health);

const healArcher = wizard.heal.bind(archer, 10,10);
console.log('Heal archer is a ---- ', healArcher);
console.log('Calling healArcher Function....');
healArcher();
console.log('Health of the archer is ---- ', archer.health);

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNow = character.getCharacter.bind(character);
console.log('? ', giveMeTheCharacterNow());