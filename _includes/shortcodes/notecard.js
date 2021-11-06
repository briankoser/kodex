const contentCard = require('./contentcard.js');

module.exports = function (content, data) {
    let contentUrl = data.contentUrl || data.data?.contentUrl || {};
    let url = (contentUrl.url == undefined)
    ? '' 
    : `<div><a href="${contentUrl?.url}">${contentUrl?.name ?? contentUrl?.url}</a></div>`;
    let body = (content == undefined)
    ? ''
    : `<div class="note-body">${content}</div>`;
    let note = `${url}${body}`;
    
    data.cardType = "note";

    return contentCard(note, data);
};