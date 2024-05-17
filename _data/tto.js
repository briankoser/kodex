const Cache = require("@11ty/eleventy-cache-assets");
const xml2js = require('xml2js');

// uncomment for local dev
// const dotenv = require('dotenv')
// dotenv.config();

module.exports = async function() {
  const CORS = `https://cors-anywhere.herokuapp.com/`;
  const URL_TTO_FEED = `https://tto.koser.us/feed.rss`;
  
  console.log("Fetching Ten to One episodes…");

  let feed = await Cache(URL_TTO_FEED, {
    duration: "1d",
    type: "text"
  });

  let xml = await xml2js.parseStringPromise(feed);
  
  let albumImageUrl = xml.rss.channel[0].image[0].url[0];
  let episodes = xml.rss.channel[0].item.map(i => {
    let mp3Url = i.guid[0]["_"];
    let slug = mp3Url.slice(mp3Url.lastIndexOf('/') + 1, mp3Url.lastIndexOf('.'));
    let number = Number.parseInt(slug.slice(0, slug.lastIndexOf('-')), 10);
    
    return {
      number,
      albumImageUrl,
      title: i.title[0],
      url: `${i.link[0]}/episodes/${slug}`,
      date: new Date(i.pubDate[0]),
      description: i.description[0],
      cardType: 'podcast'
    }
  });
  
  return episodes;
};