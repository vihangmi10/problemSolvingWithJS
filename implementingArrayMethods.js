Array.prototype.myMap = function(callback) {
    const newArr = [];
    for(let index = 0 ; index < this.length ; index++){
        newArr.push(callback(this[index], index, this));
    }
    return newArr;
};

const arr = [1,2,3];
const newArr = arr.myMap((value) => value * 2 );

console.log('New array is ---- ', newArr);

// Filter
Array.prototype.myFilter = function (callback) {
    const newArr = [];
    for(let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)) newArr.push(this[index]);
    }
};

const filterArr = arr.filter((num) => num > 1);
console.log('Filter array is ---- ', filterArr);

// Learning reduce
// Adding each number in the array and storing the intermediate results in the accumulator parameter

const total = arr.reduce((accumulator, value) => {
    return accumulator + value;
}, 0); // Also specify the initial value that will be assigned to the accumulator initially.

console.log('The total is ---- ', total);

// Creating map method using reduce
Array.prototype.mapUsingReduce = function(callback) {
    return this.reduce((accumulator, element) => {
        return accumulator.concat(callback(element));
    }, []);
};

const mapUsingReduceArray = arr.mapUsingReduce(x => x * 2);
console.log('Map using reduce array is ---- ', mapUsingReduceArray);

// Creating filter method using reduce
Array.prototype.filterUsingReduce = function(callback) {
    return this.reduce((accumulator, value) =>{
       return callback(value) ? accumulator.concat(value) : accumulator
    }, [])
};

const filterUsingReduceArray = arr.filterUsingReduce(x => x > 1);

console.log('Filter using reduce array ---- ', filterUsingReduceArray);


// Flatting of Array using REDUCE
const complexArray = [[1,2], [3,4], [5,6]];
Array.prototype.myFlatten = function() {

    return this.reduce((flatArray, values) => {
        return flatArray.concat(Array.isArray(values) ? values.myFlatten(): values)
    }, [])
};

console.log('Flatted array is ---- ', complexArray.myFlatten());