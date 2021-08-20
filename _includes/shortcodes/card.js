const { format, formatISO } = require('date-fns');

module.exports = function (content, data) {
    let card = '';
    let author = data?.author ?? data?.data?.author ?? '';

    if (data == undefined) {
        card = content;
    }
    else {
        let date = (data.date == undefined)
            ? ''
            : `${format(data.date, "dd")} <span class="small-caps">${format(data.date, "MMM")}</span> ${format(data.date, "yyyy")}`;
        let machineDate = (data.date == undefined)
            ? ''
            : formatISO(data.date, { representation: "date" });
        let dateContainer = (date == '') ? '' : `<div class="card-date"><time class="dt-published" datetime='${machineDate}'>${date}</time></div>`;
        let titleContainer = (data.title == undefined) ? '' : `<div class="card-title"><h2>${data.title}</h2></div>`;
        let authorContainer = (author == '') ? '' : `<div class="card-author p-author">${author}</div>`;
        let url = (data.data?.contentUrl?.url == undefined) ? '' : `<p><a href="${data.data?.contentUrl?.url}">${data.data?.contentUrl?.name ?? data.data?.contentUrl?.url}</a></p>`;
        let body = `<div class="card-body e-content">${url}<p>${content}</p></div>`;
        card = `${dateContainer}${authorContainer}${titleContainer}${body}`;
    }

    return `<article class="box card ${data?.title == undefined ? 'note' : ''} ${author?.toLowerCase()} h-entry">${card}</article>`;
};