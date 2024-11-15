const { format } = require('date-fns');
const slugify = require('slugify');

module.exports = function (data) {
    let traditions = `<ol class="traditions">${(data.traditions || []).map(t => `<li>${t}</li>`).join('')}</ol>`;
    let comments = `<p class="comments">${data.comments}</p>`;

    return `
<article>
    <h2 id="${slugify(data.name, {lower: true})}">${data.name}</h2>
    <p class="date">${format(data.date, "MMMM do, yyyy")}</p>
    <p class="category">${data.category}</p>
${data.traditions == undefined ? '' : traditions}
${data.comments == undefined ? '' : comments}
</article>`;
};