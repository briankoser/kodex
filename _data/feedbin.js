const Cache = require("@11ty/eleventy-cache-assets");

// uncomment for local dev
//const dotenv = require('dotenv')
//dotenv.config();

const FEEDBIN_USER = process.env.FEEDBIN_USER;
const FEEDBIN_PASSWORD = process.env.FEEDBIN_PASSWORD;

module.exports = async function() {
  const CORS = `https://cors-anywhere.herokuapp.com/`;
  const URL_FEEDBIN_STARRED_ENTRIES = `https://api.feedbin.com/v2/starred_entries.json`;
  const URL_FEEDBIN_ENTRIES = `https://api.feedbin.com/v2/entries.json`;
  let options = {
    headers: {'Authorization': `Basic ${Buffer.from(`${FEEDBIN_USER}:${FEEDBIN_PASSWORD}`).toString('base64')}`}
  };
  
  console.log("Fetching Feedbin starred articles…");

  let starredEntries = await Cache(URL_FEEDBIN_STARRED_ENTRIES, {
    duration: "1d",
    type: "json",
    fetchOptions: options
  });

  // splits array into array of arrays of size pageSize
  let pageArray = (arr, pageSize) => {
    if (arr.length <= pageSize) return [arr];
    return [arr.slice(0, pageSize), ...pageArray(arr.slice(pageSize), pageSize)];
  }

  let pagedStarredEntries = pageArray(starredEntries, 100);

  let starred = [];
  for (const entry of pagedStarredEntries) {
    let queryString = `?ids=${entry.join(',')}`;
    let starredPage = await Cache(`${URL_FEEDBIN_ENTRIES}${queryString}`, {
      duration: "1d",
      type: "json",
      fetchOptions: options
    });
    starred.push(starredPage);
  }

  return starred.flat();
};