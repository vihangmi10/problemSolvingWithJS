
function solution(S) {
    // empty array
    let SentenceArr = [];
    // Break it down and divide into individual sentences
    divideIntoSentence(S, SentenceArr);
    // maximum words in sentence
    let CurrentMax = 0;
    for(let sentence in SentenceArr) {
        let words = findLengthOfSentence(SentenceArr[sentence]);
        words > CurrentMax ? CurrentMax = words : CurrentMax;
    }
    return CurrentMax;
}
function findLengthOfSentence(str) {
    // trim it to remove extra spaces
    let trimmedString = str.trim();
    if(trimmedString == null || trimmedString == '') {
        return 0
    }
    else {
        let arr = trimmedString.split(/\s+/);
        return arr.length;
    }
}

function divideIntoSentence(S, sentenceArr) {
    // recursive senteces
    if(!(S.includes('.') || S.includes('?') || S.includes('!'))){
        return sentenceArr.push(S);
    }

    else {
        // if string contains . string.split all the parts
        if( S.includes('.') )
        {
            let splitArray = S.split('.');
            for( let elem in splitArray )
            {
                divideIntoSentence(splitArray[elem], sentenceArr);
            }
        }
        if( S.includes('?') )
        {
            let splitArray = S.split('?');
            for( let elem in splitArray )
            {
                divideIntoSentence(splitArray[elem], sentenceArr);
            }
        }
        if( S.includes('!') )
        {
            let splitedArray = S.split('!');
            for( let elem in splitedArray )
            {
                divideIntoSentence(splitedArray[elem], sentenceArr)
            }
        }

    }
}


let S = 'a......???????!!!!!!!...!!!!?????';
console.log(solution(S));