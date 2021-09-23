const db = require('./db')

module.exports = async function() {
    const res = await db.query(`SELECT bookid, title, goodreadsbookurl, imageurl, isbn13, pagecount, publicationyear, slug, reviews, author
    FROM books.bookreviews`);
    return res.rows;
}