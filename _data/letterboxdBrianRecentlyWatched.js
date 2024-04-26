const Cache = require("@11ty/eleventy-cache-assets");
const Parser = require("rss-parser");

module.exports = async function() {
  console.log("Fetching Letterboxd Brian recent…");

  try {
    const URL_LETTERBOXD_BRIAN_RSS = `https://letterboxd.com/bkoser/rss/`;
    let rss = await Cache(URL_LETTERBOXD_BRIAN_RSS, {
      duration: "1d",
      type: "xml"
    });
    
    let parser = new Parser({
      customFields: {
        item: ['letterboxd:watchedDate','letterboxd:rewatch','letterboxd:filmTitle','letterboxd:filmYear','tmdb:movieId']
      }
    });
    let films = await parser.parseString(rss);
    const posterUrlRegex = /src=\"([A-Za-z0-9:/.\-\?=]+)/g;

    return films.items.map(i => {
      return {
        description: i.description, 
        link: i.link,
        watchedDate: new Date(i['letterboxd:watchedDate']),
        isRewatch: i['letterboxd:rewatch'],
        filmTitle: i['letterboxd:filmTitle'],
        filmYear: i['letterboxd:filmYear'],
        posterUrl: posterUrlRegex.exec(i.description)
      }
    })
    .filter(film => !(film.filmTitle == undefined))
    .sort((a,b) => {
      return b.watchedDate - a.watchedDate
    });
  }
  catch (e) {
    return [];
  }
}