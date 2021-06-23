module.exports = function (content, data) {
    let header = (data?.title == undefined) ? '' : `<div class="box invert">${data.title}</div>`;
    let name = (data?.author == undefined) ? '' : data.author.toLowerCase();
    let byline = (data?.author == undefined) ? '' : `—${data.author}`;

    return `<div>${header}
<div class="box card ${name}">
<p>${content}</p>
<small>${byline}</small>
</div>
</div>`;
};