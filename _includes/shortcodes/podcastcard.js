const { format, formatISO } = require('date-fns');
const card = require('./card.js');
const icon = require('./icon.js');

module.exports = function (data) {
    let cardData = Object.assign({}, data);
    cardData.cardType = "podcast";

    let readableDate = format(data.date, "dd MMM yyyy");
    let machineDate = formatISO(data.date, { representation: "date" });
    let date = `<div class="card-date">${icon('time')} <time class="dt-published" datetime='${machineDate}'>${readableDate}</time></div>`;
    let body = `
    <div class="card-content e-content"><a href="${data.url}">${data.title}</a><p>${data.description}</p></div>
    <div class="card-sidebar"><img src="${data.albumImageUrl}" />${date}</div>`;
        
    return card(body, cardData);
};