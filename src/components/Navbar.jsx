
import { NavLink, useLocation} from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext, WishContext } from "../App";





const Navbar = () => {

  const [addToCart, setAddToCart] = useContext(CartContext)
  const [addToWish, setAddToWish] = useContext(WishContext)
  const location = useLocation()


    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </>
    );
  return (
    <div className={`${location.pathname === "/" ? "bg-c1" : "bg-white"}`}>
      <div className="navbar  px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
        <div className="navbar-start gap-3 items-center text-white">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`lg:hidden ${location.pathname === "/" ? "text-white" : "text-c1"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm text-c1 bg-white font-medium flex flex-col gap-3"
            >
              {links}
            </ul>
          </div>
          <a
            className={`text-lg md:text-2xl font-semibold ${
              location.pathname === "/" ? "text-white" : "text-c2"
            }`}
          >
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-2 flex gap-3 items-center text-sm font-medium  ${
              location.pathname === "/" ? "text-white" : "text-c1"
            }`}
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3 md:gap-6 ">
          <div className="relative">
            <div className="text-xl md:text-2xl border bg-white p-2 md:p-3 rounded-full">
              <MdOutlineShoppingCart></MdOutlineShoppingCart>
            </div>
            <div className="absolute -top-3 -right-3 bg-green-50 w-8 h-8 flex items-center justify-center rounded-full text-green-700 font-medium border">
              <h3>{addToCart}</h3>
            </div>
          </div>
          <div className="text-xl md:text-2xl bg-white border p-2 md:p-3 rounded-full relative">
            <div>
              <CiHeart></CiHeart>
            </div>
            <div className="absolute text-base -top-3 -right-3 bg-green-50 w-8 h-8 flex items-center justify-center rounded-full text-green-700 font-medium border">
              <h3>{addToWish}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
