const Cache = require("@11ty/eleventy-cache-assets");
const Parser = require("rss-parser");

const fs = require("fs");
const metadata = JSON.parse(fs.readFileSync("_data/metadata.json"));

// https://www.joshwcomeau.com/snippets/javascript/range/
const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

module.exports = async function() {
  console.log("Fetching Goodreads Brian years read…");

  let bookYears = [];
  let currentYear = new Date().getFullYear();
  let years = range(metadata.goodreads_first_reread_year, currentYear + 1);

  for (const year of years) {
    let URL_GOODREADS_BRIAN_YEARS_READ = `https://www.goodreads.com/review/list_rss/4812558?key=Iu1W8E_OaZK1MDo5zpn3CYRBY78RlHrQIGswdyIFN9g3TIYT&shelf=read-${year}`;
    let rss = await Cache(URL_GOODREADS_BRIAN_YEARS_READ, {
      duration: "1d",
      type: "xml"
    });
  
    let parser = new Parser({
      customFields: {
        item: ['book_image_url','book_small_image_url','book_medium_image_url','book_large_image_url', 'book_description','book','author_name','isbn','book_published','user_read_at','user_review','user_rating','user_shelves']
      }
    });
    let books = await parser.parseString(rss);

    let bookYear = books.items.map(i => {
      return {
          title: i.title,
          images: {
              url: i.book_image_url,
              small: i.book_small_image_url,
              medium: i.book_medium_image_url,
              large: i.book_large_image_url
          },
          description: i.description, 
          numPages: i.book.num_pages[0],
          author: i.author_name,
          link: i.guid,
          review: i.user_review,
          rating: i.user_rating,
          read_at: i.user_read_at == '' ? '' : new Date(i.user_read_at),
          started: i.user_date_added == '' ? '' : new Date(i.user_date_added)
      }
    }).sort((a,b) => {
        return b.read_at - a.read_at
    });
    
    bookYear.year = year;
    bookYears.push(bookYear);
  }

  return bookYears;  
}