const articleCard = require('./articlecard.js');

module.exports = function (collection, dateString) {
    let articles = collection;

    return `<div class="stack">${articles.reverse.map(a => articleCard(a))}</div>`;
};