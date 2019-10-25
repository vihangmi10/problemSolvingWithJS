let S = "Well .....  HAHAHAHAAHAHA!!!! HAVE WE DONE IT ????? I THINK WE HAVE DONE IT HERE!!!!!.......";

/**
 * @return {number}
 */
function Solution(S) {
    let regex = /[^\.\?\!]+/g;
    let splittedString = S.match(regex);
    let maxWords = 0;
    splittedString.forEach((eachSentence) => {
        let totalWords = countMaxWords(eachSentence);
        maxWords = totalWords > maxWords ? totalWords : maxWords;
    });
    return maxWords;
}
function countMaxWords(sentence) {
    return sentence.trim().split(/\s+/).length;
}

console.log('Maximum words in a sentece ..... ', Solution(S));