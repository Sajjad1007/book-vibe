import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="hero px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto my-5">
      <div className="hero-content min-w-full rounded-2xl flex-col lg:flex-row-reverse bg-[#13131308] lg:px-20 2xl:px-28 py-12 gap-6 lg:gap-20 xl:gap-60 2xl:gap-80">
        <img
          src={banner}
          className="h-92 rounded-lg"
          alt="Banner"
          loading="lazy"
        />
        <div className="mx-6 sm:mx-10 md:mx-12 lg:mx-0">
          <h1 className="text-5xl/16 my-6 text-[#131313] font-bold font-display">
            Books To Freshen Up Your Bookshelf
          </h1>
          <button className="btn bg-green h-11 w-36 rounded-lg text-white font-work font-semibold hover:opacity-80">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
