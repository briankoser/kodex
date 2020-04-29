module.exports = function(eleventyConfig) {
    // metadata
    const fs = require("fs");
    const metadata = JSON.parse(fs.readFileSync("_data/metadata.json"));
    
    // filters
    const { format, formatISO } = require('date-fns');

    eleventyConfig.addFilter("machineDate", dateObject => formatISO(dateObject, { representation: "date" }));
    eleventyConfig.addFilter("readableDate", dateObject => format(dateObject, "MMMM do, yyyy"));

    // layouts
    eleventyConfig.addLayoutAlias('article', 'layouts/article.njk');
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    // passthrough copy
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('js');

    // settings
    eleventyConfig.setDataDeepMerge(true);

    // shortcodes
    const autoLoad = require('auto-load');
    const shortcodes = autoLoad('_includes/shortcodes');
    let addShortcode = (name) => eleventyConfig.addShortcode(name, (data) => shortcodes[name](data, metadata));

    addShortcode('checkbox');
    addShortcode('hr');
    addShortcode('img');
    addShortcode('youtube');

    return {
        markdownTemplateEngine: "njk"
    };
};