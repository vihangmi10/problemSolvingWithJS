/*
Given a array of strings and a maximum number of characters in a line count
Return a output array of strings with each string containing exact or less than the characters count
Ex.
input:
[
    'Hello my name is Vihang Mirkhelkar',
    'I am a Master's student'
    'I live in LA'
],
30
OutPut :
[
    'Hello my name is Vihang', // 30 characters or less
    'Mirkhelkar I am a Master's',
    'Student I live in LA'
]
Including white space as a character.
 */


const telegramFunc = (strings, characterCount) => {
    let resultStr = '';
    let outputArr = [];
    strings.forEach((str, index) => {
       let wordArr = str.split(' ');
       wordArr.forEach((word) => {
          let totalLength = resultStr.length + word.length + ' ';
          if(totalLength <= characterCount) {
              resultStr = resultStr + word + ' ';
          } else {
              outputArr.push(resultStr.trim());
              resultStr = word + ' ';
          }
       });
       if(index === strings.length - 1) {
           outputArr.push(resultStr);
       }
    });
    return outputArr;
};
const strings = [
    'Hello my name is Vihang Mirkhelkar',
    'I am a Master student',
    'I live in Hawthorne California near LA'
];
const result = telegramFunc(strings, 20);
console.log('Result is --- ', result);
