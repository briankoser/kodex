const Cache = require("@11ty/eleventy-cache-assets");
const { parseISO } = require('date-fns');

module.exports = async function() {
  const CORS = `https://cors-anywhere.herokuapp.com/`;
  const URL_FEEDBIN_STARRED_ENTRIES = `https://api.feedbin.com/v2/starred_entries.json`;
  const URL_FEEDBIN_ENTRIES = `https://api.feedbin.com/v2/entries.json`;
  let username = 'brianmkoser@gmail.com';
  let password = 'cVY5f3r3PgbvvPh942DHf2WXejsMMQUj';
  let options = {
    headers: {'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`}
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

  let flat = starred.flat();
  let notes = flat.map(f => {
    f.date = parseISO(f.created_at);
    
    f.externalUrl = f.url;
    delete f.url;
    
    f.externalAuthor = f.author;
    let author = f.externalAuthor == undefined ? '' : `${f.externalAuthor}: `;
    f.note = `<div>${author}<a href="${f.externalUrl}">${f.title}</a></div>`;
    
    return f;
  });

  return notes;
};