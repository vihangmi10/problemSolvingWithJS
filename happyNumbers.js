// Given a number check if it is more than a single digit number
// if the number is more that single digit break it into individual digits
// take their squares and add
// if the added number is greater then single digit repeat the process
// till you get a digit one. If digit one is found return and say happy number found
// Ex. Number 49
// 4 ^ 2 + 9^2 = 16 + 81
// 16 --> 1 ^ 2 + 6 ^ 2 = 1 found happy number

function splitNumberIntoDigits(num) {
    const regexDigit = /\d/g;
    const strDigit = num.toString();
    return  strDigit.match(regexDigit);
}

function checkIfHappyNumber(digitArray) {
    return digitArray.includes('1');
}

function findHappyNumber(num) {
    let digitArray = [];
    if(num >= 10) {
        digitArray = splitNumberIntoDigits(num);
    } else {
        digitArray.push(num);
    }
    console.log('Digits Array is --- ', digitArray);
    if(checkIfHappyNumber(digitArray)) {
        console.log('Happy Number found....');
        return true;
    }
    console.log('Not a Happy number yet so calculate...');
    return digitArray.reduce((accumulator, currentDigit, index, arr) => {
        let happyNumberFound = false;
        console.log('Current Value calculating ---- ', currentDigit);
        accumulator += currentDigit * currentDigit;
        if(accumulator > 9) {
            console.log('Finding the happy number in ---- ', accumulator);
            happyNumberFound = findHappyNumber(accumulator)
        }
        if(happyNumberFound) {
            arr.splice(1);
            console.log('The arr is --- ', arr);
        }
        console.log('Accumulator at the end ---- ', accumulator);
        return accumulator;
    }, 0);
    findHappyNumber(resultDigits);
}

console.log(findHappyNumber(49));