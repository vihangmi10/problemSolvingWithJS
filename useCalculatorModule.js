var calculator = require('./calculator');
var sub = require('./calculator').sub;

var num1 = 5;
var num2 = 7;

function add(num1, num2) {
    return num1 + num2;
}
var result1 = add(num1, num2);
console.log('Result of addition function within the module ---- ', result1);
var result2 = calculator.add(num1, num2);
console.log('Result of using calculator library is --- ', result2);
var result3 = sub(num1, num2);
console.log('Result of substraction from the module imported in a different style ---- ', result3);
