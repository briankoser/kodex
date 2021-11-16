const { parseISO } = require('date-fns');
const contentCard = require('./contentcard.js');
const urlDate = require('../functions/urlDate.js');

module.exports = function (data) {
    let card = Object.assign({}, data);
    card.author = 'Brian';
    card.cardType = "feedbin";
    card.date = parseISO(data.created_at);
    card.url = `${urlDate(data.created_at)}/`;

    let author = data.author == undefined ? '' : `${data.author}: `;
    let note = `<div>${author}<a href="${data.url}">${data.title}</a></div>`;
    
    return contentCard(note, card);
};