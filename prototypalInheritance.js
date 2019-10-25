// Given a date function add lastYear method to date function that will print a year before the passed year
//new Date('1900-05-27').lastYear() // 1899

Date.prototype.lastYear = function () {
 return this.getFullYear() - 1
};
// Date.prototype.printDate = function () {
//   return `The date is --- ${this.getDate()}`;
// };
const year = new Date('2019-05-27').lastYear();
console.log('Last year ---- ', year);

// Modify the Map method of the array to add Map emoji at the end of each number
// console.log([1,2,3].map()); // 1MAP, 2MAP, 3MAP

Array.prototype.map = function () {
    const iterator = this.values();
    for(let element of iterator) {
        console.log(`${element}MAP`);
    }
};
const array = [1,2,3];
array.map();

// Create a bind method using call or apply
Function.prototype.bind = function (callingObject) {
   let self = this;
   return function () {
       return self.call(callingObject);
   }
};
const obj1 = {
    firstName: 'Vihang',
    lastName: 'Mirkhelkar'
};
const obj2 = {
    firstName: 'Hemant',
    lastName: 'Mirkhelkar'
};

function printName() {
    console.log(`${this.firstName} ${this.lastName}`);
}
const printVihang = printName.bind(obj1);
//console.log(printVihang());
//printName.call(obj2);

const obj3 = {
    name: 'vihang',
   some: function(obj) {
       console.log('this is --- ', this);
       const self = this;
       return function() {
           console.log('Running this function ....');
           return self.apply(obj)
       }
   }
};
//const func = obj3.some(obj1);
//console.log(func());
const func = obj3.some(obj1);
func();