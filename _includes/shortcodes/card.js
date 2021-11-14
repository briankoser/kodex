module.exports = function (content, data) {
    let cardType = data?.cardType;
    let author = data?.author;

    return `<article class="box card ${cardType == undefined ? '' : `card-${cardType}`} ${author == undefined ? '' : `${author.toLowerCase()}`} h-entry">${content}</article>`;
};