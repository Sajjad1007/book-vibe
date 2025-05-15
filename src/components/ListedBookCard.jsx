import { RxCross2 } from "react-icons/rx";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const ListedBookCard = ({ book, list, handleRemoveFromList }) => {
  const {
    image,
    author,
    bookName,
    tags,
    publisher,
    totalPages,
    category,
    rating,
  } = book;

  return (
    <div className="relative border-[#13131320] border rounded-xl p-4 flex flex-col sm:flex-row gap-8 my-6">
      <img
        src={image}
        alt={author}
        loading="lazy"
        className="w-42 h-52 rounded-xl mx-auto"
      />
      <div className="flex-1">
        <h2 className="font-display text-[#131313] font-bold text-2xl">
          {bookName}
        </h2>
        <p className="font-work font-medium text-base py-3 text-[#131313]">
          By {author}
        </p>
        <div className="flex gap-3 items-center">
          <b className="font-work text-[#131313]">Tags</b>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#13131308] rounded-2xl text-sm text-green px-3 py-1 font-work font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="my-2.5 flex flex-col sm:flex-row gap-2 lg:gap-6 lg:items-center">
          <div className="flex gap-2 items-center text-[#131313]">
            <IoPeopleOutline size={22} />
            <div className="text-sm">Publisher: {publisher}</div>
          </div>
          <div className="flex gap-2 items-center text-[#131313]">
            <MdOutlineContactPage size={22} />
            <div className="text-sm">Pages: {totalPages}</div>
          </div>
        </div>
        <hr className="text-[#13131320] my-4" />
        <div className="flex gap-3 lg:gap-4 items-center">
          <div className="bg-[#328eff15] text-[#328eff] rounded-3xl text-sm px-4.5 py-2">
            Category: {category}
          </div>
          <div className="bg-[#ffac3315] text-[#ffac33] text-sm rounded-3xl px-4.5 py-2">
            Rating: {rating}
          </div>
        </div>
      </div>
      <RxCross2
        onClick={() => handleRemoveFromList(book, list)}
        className="absolute top-2 right-2 hover:cursor-pointer btn btn-sm btn-circle btn-ghost w-6 h-6 text-[#131313]"
      />
    </div>
  );
};

export default ListedBookCard;
