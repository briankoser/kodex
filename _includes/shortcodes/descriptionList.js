module.exports = function (data) {
    return `
<dl>
${data.map(entry => 
    `<dt>${entry.term}</dt>
    <dd>${entry.description}</dd>`
).join('\n')}
</dl>`;
}