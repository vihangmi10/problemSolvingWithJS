/*
Given an array find the minimum distance between any pair within the array
The difference between the indices at which the pair exists
[4,3,5,6,7,1,4]
Pair is 4 at index 0 and at index 6
Distance is |0-6| = 6
[2,3,5,1,7,3,2]
First pair found is 3 at index 1 and at index 5
Distance is |1-5| = 4 return 4
 */

/*
approach 2 pointer
when starting at first position and second starting position + 1
if elements match then take a mod of their difference and return else return -1
 */

const minimumDistance = (arr) => {
   let obj = {};
   let distance = Infinity;
   arr.forEach((element, index) => {
       let arr = [];
       if(obj[element]) {
           arr = obj[element];
           arr.push(index);
           obj[element] = arr;
       } else {
           arr.push(index);
           obj[element] = arr;
       }
   });
    let objectValues = Object.values(obj);
    objectValues.forEach((elementDistArr) => {
        if(elementDistArr.length > 1) distance = Math.min(Math.abs(elementDistArr[0] - elementDistArr[1]), distance);
    });
  if(distance === Infinity) distance = -1;
  return distance;
};

const dist = minimumDistance([1,4,3,5,6,7,3,1]);
console.log('Minimum distance is --- ', dist); // 4

