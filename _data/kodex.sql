drop table users.KodexUser;
drop table books.BookShelfType;
drop table books.UserBookShelfType;
drop table books.UserBookShelf;
	

create table users.KodexUser (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    nameDisplay varchar not null,
    nameFull varchar not null,
    goodreadsUserId varchar,
    goodreadsUrl varchar
);

create table books.BookShelfType (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    name varchar not null
);

create table books.UserBookShelfType (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    name varchar not null
);

create table books.BookShelf (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    name varchar not null,
    bookshelftypeid int not null,
    goodreadsShelfId varchar,
	CONSTRAINT fk_BookShelf_bookshelftypeid FOREIGN KEY(bookshelftypeid) REFERENCES books.BookShelfType(id)
);

create table books.UserBookShelf (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    name varchar not null,
    userbookshelftypeid int not null,
    goodreadsShelfId varchar,
	CONSTRAINT fk_UserBookShelf_userbookshelftypeid FOREIGN KEY(userbookshelftypeid) REFERENCES books.UserBookShelfType(id)
);

create table books.Author (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    name varchar not null,
    dateBorn Date,
    dateDied Date,
    gender varchar(6),
    goodreadsRatingsAverage numeric(3, 2),
    goodreadsAuthorId varchar,
    goodreadsRatingsCount Integer,
    goodreadsUrl varchar,
	timestamp timestamp with time zone not null default CURRENT_TIMESTAMP
);

create table books.list (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
	name varchar not null,
    description varchar,
	goodreadsSeriesId varchar
);

create table books.Book (
    id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    name varchar not null,
    descriptionFull varchar,
    descriptionShort varchar,
    goodreadsId varchar,
    goodreadsRatingsAverage numeric(3, 2),
    goodreadsRatingsCount integer,
    goodreadsRatingsDistributionFive integer,
    goodreadsRatingsDistributionFour integer,
    goodreadsRatingsDistributionThree integer,
    goodreadsRatingsDistributionTwo integer,
    goodreadsRatingsDistributionOne integer,
    goodreadsUrl varchar,
    imageLarge varchar,
    imageSmall varchar,
    isbn varchar(10),
    isbn13 varchar(13),
    pageCount integer,
    publicationYear integer,
	timestamp timestamp with time zone not null default CURRENT_TIMESTAMP
);

create table books.Book_List (
    id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    bookid integer not null,
    listid integer not null,
    position integer not null,
	CONSTRAINT fk_Book_List_bookid FOREIGN KEY(bookid) REFERENCES books.book(id),
	CONSTRAINT fk_Book_List_listid FOREIGN KEY(listid) REFERENCES books.list(id)
);

create table books.Author_Book (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    bookid integer not null,
    authorid integer not null,
	CONSTRAINT fk_Author_Book_bookid FOREIGN KEY(bookid) REFERENCES books.book(id),
	CONSTRAINT fk_Author_Book_authorid FOREIGN KEY(authorid) REFERENCES books.author(id)
);

create table books.Book_BookShelf (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    bookid integer not null,
    bookshelfid integer not null,
	timestamp timestamp with time zone not null default CURRENT_TIMESTAMP,
	CONSTRAINT fk_Book_BookShelf_bookid FOREIGN KEY(bookid) REFERENCES books.book(id),
	CONSTRAINT fk_Book_BookShelf_bookshelfid FOREIGN KEY(bookshelfid) REFERENCES books.bookshelf(id)
);

create table books.UserBook (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    bookid integer not null,
    userid integer not null,
	CONSTRAINT fk_UserBook_bookid FOREIGN KEY(bookid) REFERENCES books.book(id),
	CONSTRAINT fk_UserBook_userid FOREIGN KEY(userid) REFERENCES users.KodexUser(id)
);

create table books.UserBook_UserBookShelves (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
	userbookid integer not null,
    userbookshelfid integer not null,
	timestamp timestamp with time zone not null default CURRENT_TIMESTAMP,
	CONSTRAINT fk_UserBook_UserBookShelves_userbookid FOREIGN KEY(userbookid) REFERENCES books.userbook(id),
	CONSTRAINT fk_UserBook_UserBookShelves_userbookshelfid FOREIGN KEY(userbookshelfid) REFERENCES books.userbookshelf(id)
);

create table books.Review (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
    isSpoiler boolean not null,
    body varchar,
    dateAdded timestamp with time zone,
    dateEnded timestamp with time zone,
    dateStarted timestamp with time zone,
    dateUpdated timestamp with time zone,
    goodreadsId varchar,
    goodreadsUrl varchar,
    rating integer CHECK (rating >= 0) CHECK (rating <= 10) 
);

create table books.Review_UserBook (
	id INT primary key GENERATED BY DEFAULT AS IDENTITY,
	reviewid integer not null,
	userbookid integer not null,
	CONSTRAINT fk_Review_UserBook_reviewid FOREIGN KEY(reviewid) REFERENCES books.review(id),
	CONSTRAINT fk_Review_UserBook_userbookid FOREIGN KEY(userbookid) REFERENCES books.userbook(id)
);