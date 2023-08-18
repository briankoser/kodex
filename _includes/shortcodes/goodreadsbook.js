module.exports = function (data) {
    return `<div class="book">
    <a class="cover" href="${data.link}">
        <img loading="lazy" width="160" height="240" src="${data.images.large}" alt="${data.title}">
    </a>
</div>`;
};