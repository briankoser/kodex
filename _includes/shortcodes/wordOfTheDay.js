const slugify = require('slugify');

module.exports = function (dictionary) {
    // https://stackoverflow.com/a/19303725/178225
    function getRandom(seed) {
        var x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    
    const daysSinceEpoch = Math.floor(Date.now() / 1000 / 60 / 60 / 24);
    const random = getRandom(daysSinceEpoch);
    const wordNumber = Math.floor(random * 10000) % dictionary.words.length;
    const word = dictionary.words[wordNumber - 1];
    
    return `<a href="/dictionary#${slugify(word.word, {lower: true})}">${word.word}</a>`;
};