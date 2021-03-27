module.exports = function (data) {
    return `
<figure>
    ${data.embed}
    ${data.caption == undefined 
        ? '' 
        : `<figcaption>${data.caption}</figcaption>`
    }
</figure>`
};