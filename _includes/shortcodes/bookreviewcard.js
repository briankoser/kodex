const contentCard = require('./contentcard.js');
const starsShortcode = require('./stars.js');

module.exports = function (data) {
    let url = `/books/${data.slug}`;
    let bookReview = `<div class="review-work">${data.title}</div>
    <div>by ${data.author}</div>
    <div class="review-rating">${starsShortcode(data.rating)} <a href="${url}">Review...</a></div>`;
    
    data.author = data.username;
    data.date = data.dateended;
    data.url = url;
    
    return contentCard(bookReview, data);
};