module.exports = function (data) {
    return `<div class="film">
    <a class="cover" href="${data.link}">
        <img loading="lazy" width="160" height="240" src="${data.posterUrl}" alt="${data.filmTitle}" title="${data.filmTitle}">
    </a>
</div>`;
};