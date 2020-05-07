module.exports = function(eleventyConfig) {
    // libraries
    const { format, formatISO, getDate, getMonth, getYear } = require('date-fns');

    // metadata
    const fs = require("fs");
    const metadata = JSON.parse(fs.readFileSync("_data/metadata.json"));

    // collections
    eleventyConfig.addCollection("articlesByYear", function(collection) {
        let listOfYears = collection.getFilteredByTag("article").map(article => getYear(article.date));
        let years = [...new Set(listOfYears)];
        let result = years.reduce( (accumulator, year) => {
            accumulator.push({
                "year": year,
                "articles": collection
                    .getFilteredByTag("article")
                    .filter(article => year === getYear(article.date))
            });
            return accumulator;
        }, []);
        return result;
    });

    // filters
    eleventyConfig.addFilter("day", dateObject => getDate(dateObject));
    eleventyConfig.addFilter("machineDate", dateObject => formatISO(dateObject, { representation: "date" }));
    eleventyConfig.addFilter("month", dateObject => getMonth(dateObject) + 1);
    eleventyConfig.addFilter("padZeroes", (number, zeroes) => number.toString().padStart(zeroes, '0'));
    eleventyConfig.addFilter("readableDate", dateObject => format(dateObject, "MMMM do, yyyy"));
    eleventyConfig.addFilter("removeCategoryFromUrl", url => `/${url.split('/').slice(2, -1).join('/')}/`);
    eleventyConfig.addFilter("removeSlugFromUrl", url => `${url.split('/').slice(0, -2).join('/')}/`);
    eleventyConfig.addFilter("year", dateObject => getYear(dateObject));

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
    addShortcode('dialog');
    addShortcode('hr');
    addShortcode('img');
    addShortcode('youtube');

    return {
        markdownTemplateEngine: "njk"
    };
};