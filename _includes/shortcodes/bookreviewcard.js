const { format, formatDistance, formatISO, parseISO } = require('date-fns');
const card = require('./card.js');
const icon = require('./icon.js');
const stars = require('./stars.js');

module.exports = function (data) {
    const createTimeEl = (date) => 
        `<time class="dt-published" datetime='${formatISO(date, { representation: "date" })}'>${format(date, "dd MMM yyyy")}</time>`;

    let review = {
        "userid": data.f1,
        "author": data.f2,
        "userbookid": data.f3,
        "body": data.f4,
        "dateadded": parseISO(data.f5),
        "dateended": parseISO(data.f6),
        "datestarted": parseISO(data.f7),
        "dateupdated": parseISO(data.f8),
        "rating": data.f9,
        "goodreadsurl": data.f10
    };

    let gender = review.author === "Brian" ? "male" : "female";
    
    let dates = '';

    if (review.datestarted != 'Invalid Date' && review.dateended != 'Invalid Date') {
        let startDate = createTimeEl(review.datestarted);
        let endDate = createTimeEl(review.dateended);
        let length = formatDistance(review.datestarted, review.dateended);

        dates = `${startDate}–${endDate} (${length})`;
    }
    else if (review.datestarted != 'Invalid Date') {
        dates = createTimeEl(review.datestarted);
    }
    else if (review.dateended != 'Invalid Date') {
        dates = createTimeEl(review.dateended);
    }
    else if (review.dateadded != 'Invalid Date') {
        dates = createTimeEl(review.dateadded);
    }
    
    let body = `<div>
    <div class="card-author">${icon(`${gender}-user`)} ${review.author}</div>
    <div class="card-date">${icon('time')} ${dates}</div>
    <div class="card-rating">${stars(review.rating)}</div>
    <div class="card-content e-content">${review.body}</div>
</div>`;

    data.author = review.author;
    data.cardType = 'bookreview';

    return card(body, data);
};