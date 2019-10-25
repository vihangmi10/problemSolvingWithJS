function charCount(Str) {
    let alphNumeric = /[a-z0-9]/;
    if (!Str) {
        console.log('Error');
    }
    if (!alphNumeric.test(Str)) {
        console.log('Does not contain alpha numeric characters');
    }
    let charCountObj = {};
    for (let char of Str) {
        char = char.toLowerCase();
        if (alphNumeric.test(char)) {
           charCountObj[char] = ++charCountObj[char] || 1;
        }
    }
    return charCountObj;
}

console.log('Output --- ', charCount('Hello'));