import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  addToReadlist,
  addToWishlist,
  getReadlist,
  getWishlist,
} from "../utilities/localStorage";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === parseInt(bookId));
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = book;

  const handleAddToList = (book, list) => {
    if (list === "readlist") {
      if (
        getWishlist().find((listedBook) => listedBook.bookId === book.bookId)
      ) {
        toast.error(`${bookName} is already added to wishlist.`);
      } else {
        addToReadlist(book);
        toast.success(`${bookName} is marked as read.`);
      }
    } else {
      if (
        getReadlist().find((listedBook) => listedBook.bookId === book.bookId)
      ) {
        toast.error(`${bookName} is already marked as read.`);
      } else {
        addToWishlist(book);
        toast.success(`${bookName} is added to wishlist.`);
      }
    }
  };

  return (
    <div className="my-6 flex flex-col lg:flex-row gap-8 xl:gap-12 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <img
        src={image}
        alt={bookName}
        loading="lazy"
        className="h-[32rem] sm:h-[48rem] md:h-[56rem] lg:h-[39rem] xl:h-[36rem] 2xl:h-[35rem] lg:w-2/5 rounded-xl object-cover"
      />
      <div className="flex-1">
        <h2 className="font-display text-[#131313] font-bold text-3xl">
          {bookName}
        </h2>
        <p className="font-work font-medium text-base py-3 border-b border-[#13131320] text-[#131313]">
          By {author}
        </p>
        <p className="font-work font-medium text-base py-3 border-b border-[#13131320] text-[#131313]">
          {category}
        </p>
        <p className="font-work font-normal text-base pt-4 pb-3 text-[#131313] text-justify">
          <b>Review : </b>
          {review}
        </p>
        <div className="flex gap-3 items-center">
          <b className="font-work">Tags</b>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#13131308] rounded-2xl text-sm text-green px-3 py-1 font-work font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
        <hr className="text-[#13131320] mt-4 mb-3" />
        <table className="table w-3/5">
          <tbody>
            <tr className="border-none">
              <td className="font-work font-normal text-base text-[#131313] px-0 py-1">
                Number of Pages
              </td>
              <td className="font-work font-bold text-base text-[#131313] px-0 py-1">
                {totalPages}
              </td>
            </tr>
            <tr className="border-none">
              <td className="font-work font-normal text-base text-[#131313] px-0 py-1">
                Publisher
              </td>
              <td className="font-work font-bold text-base text-[#131313] px-0 py-1">
                {publisher}
              </td>
            </tr>
            <tr className="border-none">
              <td className="font-work font-normal text-base text-[#131313] px-0 py-1">
                Year of Publishing
              </td>
              <td className="font-work font-bold text-base text-[#131313] px-0 py-1">
                {yearOfPublishing}
              </td>
            </tr>
            <tr>
              <td className="font-work font-normal text-base text-[#131313] px-0 py-1">
                Rating
              </td>
              <td className="font-work font-bold text-base text-[#131313] px-0 py-1">
                {rating}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between sm:justify-start gap-3 mt-4">
          <button
            onClick={() => handleAddToList(book, "readlist")}
            className="btn bg-white border-[#13131320] text-base font-work px-5 h-11 rounded-lg hover:bg-neutral-200"
          >
            Mark As Read
          </button>
          <button
            onClick={() => handleAddToList(book, "wishlist")}
            className="btn bg-[#50b1c9] border-[#50b1c9] text-base text-white font-work px-5 h-11 rounded-lg hover:opacity-85"
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
