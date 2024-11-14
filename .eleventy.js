/*
    libraries
*/
const { format, formatISO, getDate, getMonth, getYear, parseISO } = require('date-fns');
const autoLoad = require('auto-load');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const typesetPlugin = require('eleventy-plugin-typeset');
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
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

    eleventyConfig.addCollection("publishedNotesFeedbin", collection => {
        let notes = filterPublished(collection.getFilteredByTag("note"));
        let feedbin = collection.items[0].data.feedbin;
        return [...feedbin, ...notes].sort((a, b) => a.date - b.date);
    });

    eleventyConfig.addCollection("all", collection => {
        let articles = filterPublished(collection.getFilteredByTag("article"));
        let feedbin = collection.items[0].data.feedbin;
        let notes = filterPublished(collection.getFilteredByTag("note"));
        let podcasts = collection.items[0].data.tto;

        return [...articles, ...feedbin, ...podcasts, ...notes].sort((a, b) => b.date - a.date);
    });



    /*
        data extensions
    */
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));



    /*
        filters
    */
    const functions = autoLoad('_includes/functions');
    const addFilter = (name) => eleventyConfig.addFilter(name, (...args) => functions[name](...args));

    addFilter("byDate");
    addFilter("distinct");
    addFilter("urlDate");

    eleventyConfig.addFilter("day", dateObject => getDate(dateObject));
    eleventyConfig.addFilter("machineDate", dateObject => formatISO(dateObject, { representation: "date" }));
    eleventyConfig.addFilter("month", dateObject => getMonth(dateObject) + 1);
    eleventyConfig.addFilter("padZeroes", (number, zeroes) => number.toString().padStart(zeroes, '0'));
    eleventyConfig.addFilter("parseDate", dateString => parseISO(dateString));
    eleventyConfig.addFilter("readableDate", dateObject => format(dateObject, "MMMM do, yyyy"));
    eleventyConfig.addFilter("readableMonth", dateObject => format(dateObject, "MMMM yyyy"));
    eleventyConfig.addFilter("removeCategoryFromUrl", url => `/${url.split('/').slice(2, -1).join('/')}/`);
    eleventyConfig.addFilter("removeSlugFromUrl", url => `${url.split('/').slice(0, -2).join('/')}/`);
    eleventyConfig.addFilter("today", option => option === "year" ? new Date().getFullYear() : new Date());
    //eleventyConfig.addFilter("urlDate", dateObject => format(dateObject, "yyyyMMddHHmmss"));
    eleventyConfig.addFilter("year", dateObject => getYear(dateObject));



    /*
        layouts
    */
    eleventyConfig.addLayoutAlias('article', 'layouts/article.njk');
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('books', 'layouts/books.njk');
    eleventyConfig.addLayoutAlias('monthSummary', 'layouts/monthSummary.njk');
    eleventyConfig.addLayoutAlias('note', 'layouts/note.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');



    /*
        passthrough copy
    */
    eleventyConfig.addPassthroughCopy({'assets/css': 'css'});
    eleventyConfig.addPassthroughCopy({'assets/img': 'img'});
    eleventyConfig.addPassthroughCopy({'assets/js': 'js'});



    /*
        settings
    */
    eleventyConfig.setDataDeepMerge(true);



    /*
        shortcodes
    */
    const shortcodes = autoLoad('_includes/shortcodes');
    const addShortcode = (name) => eleventyConfig.addShortcode(name, (data) => shortcodes[name](data, metadata, tokens));
    const addPairedShortcode = (name) => eleventyConfig.addPairedShortcode(name, (content, data) => shortcodes[name](content, data, metadata, tokens));

    addPairedShortcode('card');
    addPairedShortcode('contentcard');
    addPairedShortcode('demo');
    addPairedShortcode('notecard');
    addShortcode('argument');
    addShortcode('articlecard');
    addShortcode('articlesbydate');
    addShortcode('calendarBrief');
    addShortcode('calendarDay');
    addShortcode('checkbox');
    addShortcode('descriptionList');
    addShortcode('dialog');
    addShortcode('dictionaryEntry');
    addShortcode('feedbincard');
    addShortcode('figure');
    addShortcode('goodreadsbook');
    addShortcode('hr');
    eleventyConfig.addShortcode("icon", (name, title) => shortcodes["icon"](name, title));
    addShortcode('img');
    addShortcode('letterboxdfilm');
    addShortcode('podcastcard');
    addShortcode('quote');
    addShortcode('stars');
    addShortcode('swatch');
    addShortcode('vimeo');
    addShortcode('wordOfTheDay');
    addShortcode('youtube');



    /*
        plugins
    */
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(typesetPlugin({
        only: '.site-main'
    }));


    
    return {
        markdownTemplateEngine: "njk"
    };
};