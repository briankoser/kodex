const { format } = require('date-fns');
const slugify = require('slugify');

module.exports = function (data) {
    let aka = `<p class="aka">${(data.aka || []).join(', ')}</p>`;
    let comments = `<p class="comments">${data.comments}</p>`;
    let traditions = `<ol class="traditions">${(data.traditions || []).map(t => `<li>${t}</li>`).join('')}</ol>`;

    return `
<article>
    <h2 id="${slugify(data.name, {lower: true})}" class="${data.category}">${data.name}</h2>
    ${data.aka == undefined ? '' : aka}
    <p class="date">${format(data.date, "MMMM do, yyyy")}</p>
${data.traditions == undefined ? '' : traditions}
${data.comments == undefined ? '' : comments}
</article>`;
};