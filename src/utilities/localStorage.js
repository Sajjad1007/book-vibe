const getReadlistBooks = () => {
  const readlistBooksString = localStorage.getItem("readlist");

  if (readlistBooksString) {
    return JSON.parse(readlistBooksString);
  } else {
    return [];
  }
};

const addReadlistBooks = (id) => {
  const readlistBooks = getReadlistBooks();

  if (!readlistBooks.includes(id)) {
    readlistBooks.push(id);
    localStorage.setItem("readlist", JSON.stringify(readlistBooks));
  }
};

const getWishlistBooks = () => {
  const wishlistBooksString = localStorage.getItem("wishlist");

  if (wishlistBooksString) {
    return JSON.parse(wishlistBooksString);
  } else {
    return [];
  }
};

const addWishlistBooks = (id) => {
  const wishlistBooks = getWishlistBooks();

  if (!wishlistBooks.includes(id)) {
    wishlistBooks.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistBooks));
  }
};

export {
  getReadlistBooks,
  addReadlistBooks,
  getWishlistBooks,
  addWishlistBooks,
};
