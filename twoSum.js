
// function addSum (arr, target) {
//     for(let i = 0; i< arr.length; i++) {
//         for(let j= i+1; j<arr.length;j++) {
//             const total = arr[i] + arr[j];
//             if(total === target) {
//                 return {
//                     i,
//                     j
//                 }
//             }
//         }
//     }
//     return null;
// }
//
// 2,3,4,5,7  target 9 - 5 = 4
// function addSum2 (arr, target) {
//    for(let i = 0; i<arr.length; i++) {
//        let value = target - arr[i+1];
//        if (value === arr[i]){
//            return i;
//        }
//    }
// }
//
// addSum([])
//
// function shiftArray (array, k) {
//     return array.map(function(value, index) {
//         let position = index + k - 1;
//         if (position > array.length -1) {
//             position = position - array.length ;
//         }
//         return array[position];
//     });
// }
//
// (function iife() {
//     function publicFunction() {
//
//     }
//     function privateFunction() {
//
//     }
//     return {
//         publicFunction
//     }
// }());
// const publicFunction = iife();
// publicFunction();
//
// array.map((item) => item * 2);
//
// Array.isArray(arr) // true
// Array.isArray(obj) // false
//
// [].__proto__ ==> Array
// obj.__proto__ ==> Object
function testNull() {
    let a = 'null';
    if(a == null) {
        console.log('true');
    } else {
        console.log('False');
    }
}
testNull();









































/*
function twoSum_On_Best(arr, target) {
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
console.log(twoSum_On_Best([2, 7, 11, 15], 9));

 */