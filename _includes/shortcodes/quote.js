module.exports = function (quote) {
    let cite = quote.cite != undefined 
        ? `, ${quote.cite}` 
        : '';

    let caption = quote.author != undefined 
        ? `<figcaption>— ${quote.author}${cite}</figcaption>`
        : '';

    return `
<figure class="quote">
  <blockquote>${quote.text}</blockquote>
  ${caption}
</figure>`
};