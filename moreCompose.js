const curry = fn => (...args) => fn.bind(null, ...args);

const curry2 = function(fn) {
    return function(...args) {
        console.log('ARGS ???? ', ...args);
        return fn.bind(null, ...args);
    }
};


const map = curry2((fn, arr) => arr.map(fn));

console.log(map);

const compose = (f,g) => (...args) => f(g(...args));


// Function currying
const multiply = (a,b) => a*b;

const multiplyBy2 =  multiply.bind(null, 2);

console.log('multiply 8 ---- ', multiplyBy2(8));

const someCurry = fn => (...args) => fn.bind(null, ...args);

const func = someCurry((a,b,c) => a*b*c);
const multi = func(2,5,10);
console.log(multi());

// Array Reduce and Reducer function
const arr = [1,2,3,4,5,6];
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue));

// What if array is not numbers but series of Functions ?

const add = (a, b) => a +b;
const mul = (a,b) => a * b;
const sub = (a,b) => b-a;

const add2 = add.bind(null, 2);
const mul2 = mul.bind(null, 2);
const sub2 = sub.bind(null, 2);

const funcArray = [add2, mul2, sub2];
const funcArray2 = [add, mul, sub];

const result = funcArray.reduce((currentValue, currentFunction) => currentFunction(currentValue), 10);
console.log('The result of reducing functions to single value ---- ', result);
const result2 = funcArray2.reduce((currentValue, currentFunction) => currentFunction(currentValue), [5,10]);

const tryingToCompose = (...fns) => fns.reduce(compose);

const composeOutput = tryingToCompose(
    add,
    mul,
    sub
)(5,10);

console.log('Compose output ---- ', composeOutput);