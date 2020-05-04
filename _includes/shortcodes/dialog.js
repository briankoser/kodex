const slugify = require('slugify');

module.exports = function (data) {
    return `
<div class="dialog">
${data.map(entry => 
    `<p>
        <b class="speaker ${slugify(entry.speaker, {lower: true})}">${entry.speaker}</b>: 
        “${entry.text}”
    </p>`
).join('\n')}
</div>`;
}