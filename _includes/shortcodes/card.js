const { format, formatISO } = require('date-fns');

module.exports = function (content, data) {
    let date = (data?.date == undefined)
        ? ''
        : `${format(data.date, "dd")} <span class="small-caps">${format(data.date, "MMM")}</span> ${format(data.date, "yyyy")}`;
    let machineDate = (data?.date == undefined)
        ? ''
        : formatISO(data.date, { representation: "date" });
    let dateContainer = (date == '') ? '' : `<div class="card-date"><time class="dt-published" datetime='${machineDate}'>${date}</time></div>`;
    let titleContainer = (data?.title == undefined) ? '' : `<div class="card-title"><h2>${data.title}</h2></div>`;
    let author = data?.author ?? data?.data?.author ?? '';
    let authorContainer = (author == '') ? '' : `<div class="card-author p-author">${author}</div>`;

    return `<article class="box card ${data?.title == undefined ? 'note' : ''} ${author.toLowerCase()} h-entry">
${dateContainer}
${authorContainer}
${titleContainer}
<div class="card-body e-content"><p>${content}</p></div>
</article>`;
};