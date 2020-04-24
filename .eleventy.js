module.exports = function(eleventyConfig) {
    // filters
    const { format, formatISO } = require('date-fns');

    eleventyConfig.addFilter("machineDate", dateObject => formatISO(dateObject, { representation: "date" }));
    eleventyConfig.addFilter("readableDate", dateObject => format(dateObject, "MMMM do, yyyy"));

    // layouts
    eleventyConfig.addLayoutAlias('article', 'layouts/article.njk');
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    // passthrough copies
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('js');

    // settings
    eleventyConfig.setDataDeepMerge(true);

    // shortcodes
    const autoLoad = require('auto-load');
    const shortcodes = autoLoad('_includes/shortcodes');
    let addShortcode = (name) => eleventyConfig.addShortcode(name, shortcodes[name].shortcode);

    addShortcode('checkbox');
    addShortcode('hr');
};