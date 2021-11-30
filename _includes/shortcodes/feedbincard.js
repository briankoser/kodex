const contentCard = require('./contentcard.js');

module.exports = function (data) {
    let author = data.externalAuthor == undefined ? '' : `${data.externalAuthor}: `;
    let note = `<div>${author}<a href="${data.externalUrl}">${data.title}</a></div>`;
    
    return contentCard(note, data);
};