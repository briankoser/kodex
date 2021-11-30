const db = require('./db')

module.exports = async function() {
    const res = await db.query(`SELECT isspoiler, body, datestarted, dateended, rating, goodreadsreviewurl, title, goodreadsbookurl, imageurl, isbn13, pagecount, publicationyear, slug, author, userid, username
    FROM books.ratingslist
    ORDER BY dateended DESC`);
    
    return res.rows.map(row => {
        row.cardType = "bookreview";
        row.date = row.dateended;
        return row;
    });
}