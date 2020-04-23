module.exports = function(eleventyConfig) {
    const autoLoad = require('auto-load');
    const shortcodes = autoLoad('_includes/shortcodes');
    let addShortcode = (name) => eleventyConfig.addShortcode(name, shortcodes[name].shortcode);

    addShortcode('checkbox');
    addShortcode('hr');

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('js');
};