module.exports = function (eleventyConfig) {
    /*
        libraries
    */
    const { format, formatISO, getDate, getMonth, getYear } = require('date-fns');



    /*
        metadata
    */
    const fs = require("fs");
    const metadata = JSON.parse(fs.readFileSync("_data/metadata.json"));
    const tokens = JSON.parse(fs.readFileSync("_data/tokens.json"));



    /*
        collection helper functions
    */
    let addDateCollection = (name, tag, dateFormats) => {
        eleventyConfig.addCollection(name, collection => {
            let postDates = getPostDates(collection, tag, dateFormats);
            let uniqueDates = getUniques(postDates);
            return getUniquePostDates(collection, tag, uniqueDates);
        });
    };

    // filter out drafts and unpublished articles
    let filterPublished = articles => articles.filter(a => a.date <= new Date() && !a.data.is_draft);

    // get every post for a tag by date, in every format provided in dateFormats
    let getPostDates = (collection, tag, dateFormats) => {
        let postsByDate = dateFormats
            .reduce((accumulator, dateFormat) => {
                accumulator.push(
                    filterPublished(collection.getFilteredByTag(tag))
                        .map(post => {
                            return {
                                "urlDate": format(post.date, dateFormat.url),
                                "urlFormat": dateFormat.url,
                                "displayDate": format(post.date, dateFormat.display)
                            };
                        })
                );
                return accumulator;
            }, []);
        return [].concat(...postsByDate); // flatten array; .flat() is in node v11
    }

    let getUniques = objects =>
        objects.filter((object, index) => {
            const objectString = JSON.stringify(object);
            return index === objects.findIndex(obj => JSON.stringify(obj) === objectString);
        });

    // get the list of posts for every unique date
    let getUniquePostDates = (collection, tag, uniqueDates) => {
        return uniqueDates.reduce((accumulator, uniqueDate) => {
            accumulator.push({
                "urlDate": uniqueDate.urlDate,
                "displayDate": uniqueDate.displayDate,
                "posts": filterPublished(collection.getFilteredByTag(tag))
                    .filter(post => uniqueDate.urlDate === format(post.date, uniqueDate.urlFormat))
            });
            return accumulator;
        }, []);
    }



    /*
        collections
    */
    // let dbShelfIds = await queryShelfIdsAsync(goodreadsShelfIds);
    // eleventyConfig.addCollection("bookReviews", collection => )
    
    eleventyConfig.addCollection("publishedArticles", collection =>
        filterPublished(collection.getFilteredByTag("article"))
    );
    // todo: generate dateId (I can generate fine, but isn't available in permalink)
    // eleventyConfig.addCollection("publishedArticles", collection => {
    //     let formatDate = d => formatISO(d, { representation: "date" });
    //     let filtered = filterPublished(collection.getFilteredByTag("article"));
    //     // add dateId (sequential ordered number of all articles from a single day)
    //     return filtered.map( (article, index, articles) => {
    //         let dateIndex = articles
    //             .map(a => a.date)
    //             .filter(d => formatDate(d) === formatDate(article.date))
    //             .findIndex(d => d === article.date);
    //         article.data.dateId = dateIndex + 1;
    //         return article;
    //     });
    // });

    addDateCollection("articlesByDate", "article", [
        { url: "yyyy", display: "yyyy" },
        { url: "yyyy/MM", display: "MMMM yyyy" },
        { url: "yyyy/MM/dd", display: "MMMM do, yyyy" }
    ]);

    eleventyConfig.addCollection("publishedNotes", collection =>
        filterPublished(collection.getFilteredByTag("note"))
    );



    /*
        filters
    */
    eleventyConfig.addFilter("day", dateObject => getDate(dateObject));
    eleventyConfig.addFilter("machineDate", dateObject => formatISO(dateObject, { representation: "date" }));
    eleventyConfig.addFilter("month", dateObject => getMonth(dateObject) + 1);
    eleventyConfig.addFilter("padZeroes", (number, zeroes) => number.toString().padStart(zeroes, '0'));
    eleventyConfig.addFilter("readableDate", dateObject => format(dateObject, "MMMM do, yyyy"));
    eleventyConfig.addFilter("removeCategoryFromUrl", url => `/${url.split('/').slice(2, -1).join('/')}/`);
    eleventyConfig.addFilter("removeSlugFromUrl", url => `${url.split('/').slice(0, -2).join('/')}/`);
    eleventyConfig.addFilter("urlDate", dateObject => format(dateObject, "yyyyMMddHHmmss"));
    eleventyConfig.addFilter("year", dateObject => getYear(dateObject));



    /*
        layouts
    */
    eleventyConfig.addLayoutAlias('article', 'layouts/article.njk');
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('note', 'layouts/note.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');



    /*
        passthrough copy
    */
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('js');



    /*
        settings
    */
    eleventyConfig.setDataDeepMerge(true);



    /*
        shortcodes
    */
    const autoLoad = require('auto-load');
    const shortcodes = autoLoad('_includes/shortcodes');
    let addShortcode = (name) => eleventyConfig.addShortcode(name, (data) => shortcodes[name](data, metadata, tokens));
    let addPairedShortcode = (name) => eleventyConfig.addPairedShortcode(name, (content, data) => shortcodes[name](content, data, metadata, tokens));

    addPairedShortcode('card');
    addPairedShortcode('demo');
    addShortcode('bookReviewCard');
    addShortcode('checkbox');
    addShortcode('dialog');
    addShortcode('figure');
    addShortcode('hr');
    addShortcode('img');
    addShortcode('quote');
    addShortcode('stars');
    addShortcode('swatch');
    addShortcode('youtube');
    addShortcode('vimeo');



    return {
        markdownTemplateEngine: "njk"
    };
};