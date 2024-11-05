
import { NavLink} from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext, WishContext } from "../App";





const Navbar = () => {

  const [addToCart, setAddToCart] = useContext(CartContext)
  const [addToWish, setAddToWish] = useContext(WishContext)

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
    <div className="bg-c1">
      <div className="navbar  px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
        <div className="navbar-start gap-3 items-center text-white">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
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
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm text-white font-medium flex flex-col gap-3"
            >
              {links}
            </ul>
          </div>
          <a className="text-lg md:text-2xl font-semibold text-white">
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 flex gap-3 items-center text-sm text-white font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3 md:gap-6 ">
          <div className="relative">
            <div className="text-xl md:text-2xl bg-white p-2 md:p-3 rounded-full">
              <MdOutlineShoppingCart></MdOutlineShoppingCart>
            </div>
            <div className="absolute -top-3 -right-3 bg-green-50 w-8 h-8 flex items-center justify-center rounded-full text-green-700 font-semibold border">
              <h3>{addToCart}</h3>
            </div>
          </div>
          <div className="text-xl md:text-2xl bg-white p-2 md:p-3 rounded-full relative">
            <div>
              <CiHeart></CiHeart>
            </div>
            <div className="absolute text-base -top-3 -right-3 bg-green-50 w-8 h-8 flex items-center justify-center rounded-full text-green-700 font-semibold border">
              <h3>{addToWish}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
