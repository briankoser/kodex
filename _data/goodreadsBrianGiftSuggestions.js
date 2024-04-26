const Cache = require("@11ty/eleventy-cache-assets");
const Parser = require("rss-parser");

module.exports = async function() {
  console.log("Fetching Goodreads Brian gift suggestions…");

  try {
    const LIMIT = 12;
    const URL_GOODREADS_BRIAN_TO_READ = `https://www.goodreads.com/review/list_rss/4812558?key=Iu1W8E_OaZK1MDo5zpn3CYRBY78RlHrQIGswdyIFN9g3TIYT&shelf=to-read`;
    let rss = await Cache(URL_GOODREADS_BRIAN_TO_READ, {
      duration: "1d",
      type: "xml"
    });
    
    let parser = new Parser({
      customFields: {
        item: ['book_image_url','book_small_image_url','book_medium_image_url','book_large_image_url', 'book_description','book','author_name','isbn','book_published','user_read_at','user_review','user_rating','user_shelves']
      }
    });
    let giftSuggestions = await parser.parseString(rss);
    
    console.log(giftSuggestions.items.map(i => {
      return {
        title: i.title,
        images: {
          url: i.book_image_url,
          small: i.book_small_image_url,
          medium: i.book_medium_image_url,
          large: i.book_large_image_url
        },
        description: i.description, 
        author: i.author_name,
        link: i.guid,
        user_shelves: i.user_shelves.split(',').map(s => s.trim())
      }
    })
    
    // remove already owned books
    .filter(book => !book.user_shelves.includes('own')))
    
    return giftSuggestions.items.map(i => {
      return {
        title: i.title,
        images: {
          url: i.book_image_url,
          small: i.book_small_image_url,
          medium: i.book_medium_image_url,
          large: i.book_large_image_url
        },
        description: i.description, 
        author: i.author_name,
        link: i.guid,
        user_shelves: i.user_shelves.split(',').map(s => s.trim())
      }
    })
    
    // remove already owned books
    .filter(book => !book.user_shelves.includes('own'))
    
    // shuffle
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    
    // return LIMIT number of suggestions (index is LIMIT - 1)
    .slice(0, LIMIT);
  }
  catch (e) {
    return [];
  }
}