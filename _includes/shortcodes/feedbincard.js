const { parseISO } = require('date-fns');
const contentCard = require('./contentcard.js');

module.exports = function (data) {
    let author = data.author == undefined ? '' : `${data.author}: `;
    let note = `<div>${author}<a href="${data.url}">${data.title}</a></div>`;
    
    data.author = 'Brian';
    data.cardType = "feedbin";
    data.date = parseISO(data.created_at);

    return contentCard(note, data);
};