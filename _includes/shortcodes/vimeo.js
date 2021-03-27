const figureShortcode = require('./figure.js');

module.exports = function (data) {
    let videoEmbed = '';
    if (data.id == undefined) {
        videoEmbed = '<p>Video unavailable!</p>';
    }
    else {
        videoEmbed = `
<div class="iframe-container">
    <iframe src="https://player.vimeo.com/video/${data.id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="${data.width || '640'}" height="${data.height || '480'}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${data.title}"></iframe>
</div>`;
    }

    return figureShortcode({embed: videoEmbed, caption: data.caption});
};