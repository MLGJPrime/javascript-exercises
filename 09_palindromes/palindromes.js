const palindromes = function (str) {
    let phrase = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let phraseReverse = phrase.split("").reverse().join("");
    return phrase === phraseReverse;
};

// console.log(palindromes('racecar'));
// console.log(palindromes('tacos'));

// Do not edit below this line
module.exports = palindromes;
