import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar pt-6 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-3 shadow gap-1 font-work"
          >
            <li>
              <NavLink
                to="/"
                end
                className="text-base font-normal text-[#131313] rounded-lg"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="lists"
                end
                className="text-base font-normal text-[#131313] rounded-lg"
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pages"
                end
                className="text-base font-normal text-[#131313] rounded-lg"
              >
                Pages To Read
              </NavLink>
            </li>
          </ul>
        </div>
        <a
          className="hidden sm:block sm:ml-2 lg:ml-0 text-3xl font-work font-bold cursor-pointer"
          onClick={() => {
            window.location.href = "../";
          }}
        >
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-work flex lg:gap-2 xl:gap-4 px-2">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-green text-green"
                    : "border-white text-[#131313]"
                } btn border shadow-none bg-white rounded-lg text-base font-normal`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lists"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-green text-green"
                    : "border-white text-[#131313]"
                } btn border shadow-none bg-white rounded-lg text-base font-normal`
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pages"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-green text-green"
                    : "border-white text-[#131313]"
                } btn border shadow-none bg-white rounded-lg text-base font-normal`
              }
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn bg-green rounded-lg text-white font-work font-semibold hover:opacity-80 w-22">
          Sign In
        </a>
        <a className="btn bg-[#59c6d2] rounded-lg text-white font-work font-semibold hover:opacity-80 w-22">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
