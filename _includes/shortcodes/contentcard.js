// formats:
//      content card:
//          article: title, body

const { format, formatISO } = require('date-fns');
const card = require('./card.js');
const icon = require('./icon.js');

module.exports = function (content, data) {
    let author = data.author ?? data.data?.author ?? '';
    let cardType = data?.cardType;
    let readableDate = data.date == undefined ? '' : format(data.date, "dd MMM yyyy");
    let machineDate = data.date == undefined ? '' : formatISO(data.date, { representation: "date" });
    let date = `<div class="card-date">${icon('time')} <time class="dt-published" datetime='${machineDate}'>${readableDate}</time></div>`;
    let url = `<a href="${data.url}">${icon('url')} Permalink</a>`;
    let gender = author === "Brian" ? "male" : "female";
    let body = `
<div class="card-content e-content">${content}</div>
<div class="card-sidebar">
    <div class="card-author">${icon(`${gender}-user`)} ${author}</div>
    ${data.date == undefined ? '' : date}
    <div class="card-url small-caps">${url}</div>
</div>
`;

    data.author = author;

    return card(body, data);
};