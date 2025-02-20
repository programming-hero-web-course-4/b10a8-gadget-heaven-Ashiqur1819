import { useContext, useEffect, useState } from "react";
// import { CartContext, GadgetContex, HandleCartContext } from "../App";
import { NavLink, Outlet } from "react-router-dom";
import DashboardCart from "../components/DashboardCart";
import { GadgetContex, HandlePrice } from "../App";
import DashboardWish from "../components/DashboardWish";
import { FaSortAmountUp } from "react-icons/fa";
import Group from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [
    addGadget,
    setAddGadget,
    handleSortPrice,
    handlePurchaseBtn,
    newAddToGadget,
  ] = useContext(GadgetContex);
  const [a, addGadget2, setAddGadget2] = useContext(GadgetContex);

  const [active, setActive] = useState(true);
  const [price, setPrice] = useContext(HandlePrice);
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  const handleAcitveBtn = (status) => {
    setActive(status);
  };

  return (
    <div>
      <Helmet>
        <title>Gadgets | Dashboard</title>
      </Helmet>
      <div className="h-96 text-center space-y-3 pt-12 mx-auto px-4 md:px-8 lg:px-12 bg-c1">
        <h2 className="text-4xl font-bold text-white">Dashboard</h2>
        <p className="text-white max-w-4xl mx-auto">
          Explore the latest and most fashionable accessories to enhance your
          tech experience. From essential tools to stylish additions, find
          everything you need to elevate your devices all in one place.
        </p>
        <div className="flex items-center gap-6 justify-center pt-6">
          <button
            onClick={() => handleAcitveBtn(true)}
            className={`border px-10 py-3 text-lg font-semibold rounded-full text-c1 ${
              active ? "bg-white text-c1" : "bg-c1 text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleAcitveBtn(false)}
            className={`border px-10 py-3 text-lg font-semibold rounded-full ${
              !active ? "bg-white text-c1" : "bg-c1 text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div
        className={`md:flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-8`}
      >
        <div
          className={`flex items-center md:gap-24 lg:gap-96 justify-between mb-3 ${
            active || "hidden"
          }`}
        >
          <h2 className="text-2xl font-bold text-c2">Cart</h2>
          <h2 className="text-2xl font-bold text-c2">Total Cost: ${price}</h2>
        </div>
        <h2
          className={`${
            active ? "hidden" : "block"
          } text-2xl font-bold text-c2`}
        >
          WishList
        </h2>
        <div
          className={`flex items-center justify-center gap-6 ${
            active || "hidden"
          }`}
        >
          <button
            onClick={() => handleSortPrice(addGadget)}
            className="flex items-center gap-2 px-6 py-3 border-2 border-c1 rounded-full text-c1 text-base"
          >
            Sort by Price
            <FaSortAmountUp className="text-xl"></FaSortAmountUp>
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className={`px-6 py-3 bg-c1 rounded-full border-2 border-c1 text-white text-base ${
              price == 0 && "btn-disabled bg-gray-400 border-gray-400"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-8 mb-24">
        <div>
          {addGadget.map(
            (gadget) =>
              active && (
                <DashboardCart
                  gadget={gadget}
                  key={gadget.product_id}
                ></DashboardCart>
              )
          )}
        </div>
        <div>
          {addGadget2.map(
            (gadget) =>
              !active && (
                <DashboardWish
                  gadget={gadget}
                  key={gadget.product_id}
                ></DashboardWish>
              )
          )}
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <img src={Group} className="mx-auto" alt="" />
          <h3 className="font-bold text-2xl text-center mt-4">
            Payment Successfull
          </h3>
          <div className="divider"></div>
          <p className=" text-c3 text-center">Thanks for purchasing.</p>
          <p className="text-center font-semibold text-c2 mt-2">
            Total: ${price}
          </p>
          <div className="modal-action inline">
            <form method="dialog">
              <button
                onClick={() => {
                  handlePurchaseBtn();
                  handleBackHome();
                }}
                className="btn w-full rounded-full mt-6 text-lg text-c2"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
