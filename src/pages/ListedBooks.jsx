import { useState } from "react";
import { toast } from "react-toastify";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown } from "react-icons/io";
import ListedBookCard from "../components/ListedBookCard";
import {
  getReadlist,
  getWishlist,
  removeFromReadlist,
  removeFromWishlist,
} from "../utilities/localStorage";

const ListedBooks = () => {
  const [readlist, setReadlist] = useState(getReadlist());
  const [wishlist, setWishlist] = useState(getWishlist());

  const handleSort = (sortedBy) => {
    if (sortedBy === "ratings") {
      setReadlist([...readlist].sort((a, b) => b.rating - a.rating));
      setWishlist([...wishlist].sort((a, b) => b.rating - a.rating));
    } else {
      setReadlist([...readlist].sort((a, b) => b.totalPages - a.totalPages));
      setWishlist([...wishlist].sort((a, b) => b.totalPages - a.totalPages));
    }
  };

  const handleRemoveFromList = (book, list) => {
    if (list === "readlist") {
      removeFromReadlist(book);
      setReadlist(getReadlist());
      toast.success(`${book.bookName} is has been removed from read books.`);
    } else {
      removeFromWishlist(book);
      setWishlist(getWishlist());
      toast.success(
        `${book.bookName} is has been removed from wishlist books.`
      );
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto my-5 text-center">
      <div className="min-w-full rounded-2xl flex-col lg:flex-row-reverse bg-[#13131308] px-10 sm:px-20 py-8 gap-60">
        <h2 className="text-3xl text-[#131313] font-bold font-display">
          Listed Books
        </h2>
      </div>
      <div className="dropdown dropdown-hover dropdown-center mt-6 mb-4">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-green h-11 w-32 rounded-lg text-white text-base font-work font-semibold gap-3 mb-3"
        >
          Sort By <IoIosArrowDown size={20} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-44 p-3 p shadow-sm"
        >
          <li>
            <a
              className="text-base text-[#131313] font-work rounded-lg"
              onClick={() => handleSort("ratings")}
            >
              Ratings
            </a>
          </li>
          <li>
            <a
              className="text-base text-[#131313] font-work rounded-lg"
              onClick={() => handleSort("pages")}
            >
              Page Numbers
            </a>
          </li>
        </ul>
      </div>
      <Tabs className="text-left mb-3 font-work font-regular text-base text-[#13131380]">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readlist.length > 0 ? (
            readlist.map((book) => (
              <ListedBookCard
                key={book.bookId}
                book={book}
                list="readlist"
                handleRemoveFromList={handleRemoveFromList}
              />
            ))
          ) : (
            <div className="grid place-content-center text-[#131313] h-56 text-xl">
              No books marked as read.
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {wishlist.length > 0 ? (
            wishlist.map((book) => (
              <ListedBookCard
                key={book.bookId}
                book={book}
                list="wishlist"
                handleRemoveFromList={handleRemoveFromList}
              />
            ))
          ) : (
            <div className="grid place-content-center text-[#131313] h-56 text-xl">
              No books added to wishlist.
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
