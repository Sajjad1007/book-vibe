const getReadlist = () => {
  if (localStorage.getItem("readlist")) {
    return JSON.parse(localStorage.getItem("readlist"));
  } else {
    return [];
  }
};

const addToReadlist = (book) => {
  const readlist = getReadlist();
  const matchedBook = readlist.find(
    (listBook) => listBook.bookId === book.bookId
  );

  if (!matchedBook) {
    readlist.push(book);
    localStorage.setItem("readlist", JSON.stringify(readlist));
  }
};

const removeFromReadlist = (book) => {
  const readlist = getReadlist();
  const remainingBooks = readlist.filter(
    (listBook) => listBook.bookId !== book.bookId
  );
  localStorage.setItem("readlist", JSON.stringify(remainingBooks));
};

const getWishlist = () => {
  if (localStorage.getItem("wishlist")) {
    return JSON.parse(localStorage.getItem("wishlist"));
  } else {
    return [];
  }
};

const addToWishlist = (book) => {
  const wishlist = getWishlist();
  const matchedBook = wishlist.find(
    (listBook) => listBook.bookId === book.bookId
  );

  if (!matchedBook) {
    wishlist.push(book);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

const removeFromWishlist = (book) => {
  const wishlist = getWishlist();
  const remainingBooks = wishlist.filter(
    (listBook) => listBook.bookId !== book.bookId
  );
  localStorage.setItem("wishlist", JSON.stringify(remainingBooks));
};

export {
  getReadlist,
  addToReadlist,
  removeFromReadlist,
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};
