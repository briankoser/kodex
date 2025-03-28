module.exports = function (color, height, shelf1, shelf2) {
    let shelves = (shelf1 || []).concat(shelf2 || []);
    let books = shelves.map(book => book.title);
    let titles = books.map(title => title.split(" (")[0]);
    let shortTitles = titles.filter(x => x.length < 50);
    let title = shortTitles[Math.floor(Math.random() * shortTitles.length, 1)];

    return `<div class="book book-${color} book-${height}"> <h2>${title || ''}</h2></div>`;
};