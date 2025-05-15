import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { bookName, image, author, rating, tags, category, bookId } = book;

  return (
    <Link to={`details/${bookId}`}>
      <div className="card border border-[#13131315] rounded-xl">
        <div className="p-4">
          <figure className="bg-[#13131308] p-6 rounded-xl">
            <img
              src={image}
              alt={bookName}
              loading="lazy"
              className="h-48 w-32 rounded-lg"
            />
          </figure>
        </div>
        <div className="card-body py-0 px-5">
          <div className="flex gap-3 my-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[#13131308] rounded-2xl text-green px-3 py-1 font-work font-medium"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title font-display font-bold text-2xl flex justify-between">
            {bookName}
          </h2>
          <p className="font-work font-medium text-base pb-3.5 border-b border-[#13131320] border-dashed text-[#131313]">
            By {author}
          </p>
          <div className="card-actions justify-between mb-4 mt-2">
            <div className="font-work font-medium text-base text-[#131313]">
              {category}
            </div>
            <div className="flex justify-end gap-2">
              <div className="font-work font-medium text-base text-[#131313]">
                {rating}
              </div>
              <FaStar size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
