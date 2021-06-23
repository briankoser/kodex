const { format } = require('date-fns');

module.exports = function (content, data) {
    let date = (data?.date == undefined)
        ? ''
        : `${format(data.date, "dd")} <span class="small-caps">${format(data.date, "MMM")}</span> ${format(data.date, "yyyy")}`;
    let title = (data?.title == undefined) ? '' : `<div class="card-title"><h2>${data.title}</h2></div>`;

    return `<div class="box card ${data?.title == undefined ? 'note' : ''} ${data?.author?.toLowerCase()}">
<div class="card-date">${date}</div>
<div class="card-author">${data?.author}</div>
${title}
<div class="card-body"><p>${content}</p></div>
</div>`;
};