const { format, formatISO } = require('date-fns');
const starsShortcode = require('./stars.js');
// const cardShortcode = require('./card.js');
// todo: convert card to generic card

module.exports = function (data) {
    let humanDate = `${format(data.dateended, "dd")} <span class="small-caps">${format(data.dateended, "MMM")}</span> ${format(data.dateended, "yyyy")}`;
    let machineDate = formatISO(data.dateended, { representation: "date" });

    return `<article class="book-review stretched-link-container ${data.username.toLowerCase()} h-entry">
    <header>
        <h2 class="p-name">${data.title}</h2>
        <span>${data.username}</span> ·
        <time class="dt-published" datetime='${machineDate}'>${humanDate}</time> ·
        ${starsShortcode(data.rating)} ·
        <a href="/books/${data.slug}">Review...</a>
    </header>
</article>`;
};