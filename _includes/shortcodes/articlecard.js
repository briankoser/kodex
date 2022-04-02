const contentCard = require('./contentcard.js');

module.exports = function (data) {
    let article = data.data;
    let body = `<h2 class="h3">${article.title}</h2>
    <p>${data.excerpt || data.description || ""}</p>`;
    
    article.author = article.authors?.join(", ");
    article.date = data.date;
    article.url = data.url;

    return contentCard(body, article);
};