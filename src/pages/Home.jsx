import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useLoaderData();

  return (
    <div>
      <Banner />
      <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
        <h2 className="font-display text-3xl font-bold mt-12 mb-8 text-center">
          Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 2xl:gap-8 my-6">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
