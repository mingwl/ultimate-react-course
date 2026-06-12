const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// 25 数组方法map
const books = getBooks();
const x = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(x);

const booksTitles = books.map((book) => book.title);
console.log(booksTitles);

const getTotalReviewCount = (book) => {
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreadsCount + librarythingCount;
};

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData[0]);

// 27 数组方法filter
const longBooksWithMovie = books
  .filter((book) => book.pages >= 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => book.title);
console.log(longBooksWithMovie.length);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// 27 数组方法reduce
const pagesAllBooks = books.reduce((num, book) => {
  const result = num + book.pages;
  console.log(`${num} + ${book.pages} = ${result}`);
  return result;
}, 0);
console.log(pagesAllBooks);

// 28 数组方法sort
const y = [0, 8, 5, 9, 6];
const asc = (a, b) => a - b;
const desc = (a, b) => b - a;
const ascy = y.slice().sort(asc);
const descy = y.slice().sort(desc);
console.log(y);
console.log(ascy);
console.log(descy);

const sortedByPages = books
  .slice()
  .sort((b1, b2) => b1.pages - b2.pages)
  .map((book) => ({ title: book.title, pages: book.pages }))
  .map((b) => b.pages);
console.log(sortedByPages);

// 29 Immutable Arrays
// 29.1. add book object to array
const newBook = {
  id: 6,
  title: "Happy Potter and the chamber of secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
console.log(books);
console.log(booksAfterAdd);

// 2. delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3.update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1
    ? { ...book, title: "哈哈哈", publicationDate: "2026-06-11" }
    : book,
);
console.log(booksAfterUpdate);

/*
// 18 分解对象分解数组
const books = getBooks();
getBook(2);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  getBook(1);
console.log(title, author, genres);

// 22 箭头函数
const getShortSummary = (book) => {
  const { title, author, publicationDate } = book;
  return `${title} was written by ${author} and published in ${publicationDate.split("-")[0]}.`;
};
console.log(getShortSummary(getBook(1)));

function getYear(date) {
  return date.split("-")[0];
}
console.log(getYear(getBook(1).publicationDate));

const getYearExpr = function (date) {
  return date.split("-")[0];
};
console.log(getYearExpr(getBook(1).publicationDate));

const getYearArrow = (date) => date.split("-")[0];
console.log(getYearArrow(getBook(1).publicationDate));

// 20 模板字符串
const summary = `${title} a ${pages} book written by ${author} and on ${getYearArrow(publicationDate)}, belongs to: ${genres.join(
  ", ",
)}. It ${hasMovieAdaptation ? "has" : "does not have"} a movie adaptation.`;
console.log(summary);

// 19 剩余Rest/打散Spread操作符
const [primaryGenre, secondaryGenre, ...restGenres] = genres;
console.log(primaryGenre, secondaryGenre, restGenres);

const newGenres = ["sci-fi", ...genres, "speculative fiction"];
console.log(newGenres);

const newBook = {
  ...getBook(2),
  // 添加新属性
  moviePublicationDate: "1974-12-20",
  // 覆盖原有属性
  pages: 300,
};
console.log(newBook);

// 21 三元运算符
const isLongBook = pages > 1000 ? "Yes" : "No";
console.log(`Is ${title} a long book? ${isLongBook}`);

// 23短路逻辑运算符
const bookTitle = getBook(1)?.title || "Unknown Title";
console.log(bookTitle);

console.log(true && "This will be printed");
console.log(false && "This will NOT be printed");
console.log(hasMovieAdaptation && `${title} has a movie adaptation.`);

// falsy: false, 0, "", null, undefined, NaN

// 返回第一个 falsy 的值，如果没有 falsy 的值，则返回最后一个值
console.log("jonas" && "hello world");
console.log(false && "hello world");
console.log(0 && "hello world");
console.log("" && "hello world");
console.log(null && "hello world");
console.log(undefined && "hello world");
console.log(NaN && " hello world");

// 返回第一个 truthy 的值，如果没有 truthy 的值，则返回最后一个值
console.log(true || "This will NOT be printed");
console.log(false || "This will be printed");
console.log(hasMovieAdaptation || `${title} does not have a movie adaptation.`);

console.log(getBook(1).translations.spanish || "No Spanish translation");
console.log(getBook(2).translations.spanish || "No Spanish translation");

console.log(getBook(0)?.reviews.librarything?.rating || "No rating");
console.log(getBook(1).reviews.librarything?.rating || "No rating");
console.log(getBook(2).reviews.librarything?.rating || "No rating");

console.log(getBook(0)?.reviews?.librarything?.review ?? "No rating");
console.log(getBook(1)?.reviews?.librarything?.review ?? "No rating");
console.log(getBook(2)?.reviews?.librarything?.rating ?? "No rating");

console.log(
  getBook(0)?.reviews?.librarything?.reviewCount ?? "No review count",
);
console.log(
  getBook(1)?.reviews?.librarything?.reviewCount ?? "No review count",
);
console.log(
  getBook(2)?.reviews?.librarything?.reviewCount ?? "No review count",
);

console.log(getBook(1).reviews.librarything.reviewCount);
console.log(getBook(1).reviews.librarything.reviewCount);
console.log(
  getBook(1)?.reviews?.librarything?.reviewCount || "No1 review count",
);
console.log(
  getBook(1)?.reviews?.librarything?.reviewCount ?? "No2 review count",
);

// 24 Optional chaining和Nullish coalescing空值合并运算符
console.log(getBook(0)?.reviews?.librarything?.rating || "No rating");
console.log(getBook(0)?.reviews?.librarything?.rating ?? "No rating");

const getTotalReviewCount = (book) => {
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreadsCount + librarythingCount;
};
console.log(getTotalReviewCount(getBook(1)));
console.log(getTotalReviewCount(getBook(2)));
console.log(getTotalReviewCount(getBook(3)));
console.log(getTotalReviewCount(getBook(4)));
console.log(getTotalReviewCount(getBook(5)));
*/

// 30. 异步JS:Promises
// console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));
/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("jonas");
*/

// 31. 异步JS:Async/Await
async function getTodo(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  const json = await response.json();
  console.log(json);
  return json;
}
const res = getTodo(2);
console.log(res);
console.log("jonas2");
