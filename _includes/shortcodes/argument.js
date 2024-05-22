module.exports = function (data) {
    let book = data?.book;
    let author = data?.author;
    let chapter = data?.chapter;
    let body = data?.body;

    return `<article class="box card card-argument"><h1>${book} <span class="author">by ${author}</span></h1><h2>${chapter}</h2>${body}</article>`;
};