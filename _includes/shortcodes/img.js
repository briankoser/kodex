module.exports = function (img, metadata) {
    let src = img.cdnSrc != undefined 
        ? `${metadata.cdn_url}${metadata.journal_img_path}${img.cdnSrc}` 
        : `/img/${img.src}`;

    let caption = img.caption != undefined 
        ? `<figcaption>${img.caption}</figcaption>`
        : '';

    return `
<figure>
    <img src="${src}" alt="${img.alt}">
    ${caption}
</figure>`
};