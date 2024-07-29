const slugify = require('slugify');

module.exports = function (data) {
    let definition = `<p class="definition">》${data.def}</p>`;
    let definitions = `<ol class="definitions">${(data.defs || []).map(d => `<li>${d}</li>`).join('')}</ol>`;
    let origin = `<p class="origin">Origin: ${data.origin}</p>`;
    let comments = `<p class="comments">Comments: ${data.comments}</p>`;

    return `
<article>
    <h2 id="${slugify(data.word, {lower: true})}">${data.word}</h2>
${data.def == undefined ? '' : definition}
${data.defs == undefined ? '' : definitions}
${data.origin == undefined ? '' : origin}
${data.comments == undefined ? '' : comments}
</article>`;
};