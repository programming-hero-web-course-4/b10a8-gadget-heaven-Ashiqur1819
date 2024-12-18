import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  addToCartContext,
  HandleCartContext,
  HandleRemoveContex,
} from "../App";

const DashboardWish = ({ gadget }) => {
  const [handleAddToCartBtn] = useContext(HandleCartContext);
  const handleAddToCart = useContext(addToCartContext);
  const [handleRemove, a, handleRemove2] = useContext(HandleRemoveContex);

  const { product_image, product_title, description, price } = gadget;

  return (
    <div className="md:flex items-center gap-6 border bg-white rounded-xl p-6 mb-6">
      <figure>
        <img src={product_image} className="w-40 rounded-xl" alt="" />
      </figure>
      <div className="space-y-3 flex-grow">
        <div className="flex items-center justify-between gap-4 mt-3">
          <h3 className="text-2xl text-c2 font-bold">{product_title}</h3>
          <div className="text-xl text-red-600 font-semibold border border-red-600 p-1 rounded-full cursor-pointer">
            <RxCross2 onClick={() => handleRemove2(gadget)}></RxCross2>
          </div>
        </div>
        <p className="text-c3">{description}</p>
        <h4 className="font-semibold text-c3">Price: ${price}</h4>
        <div>
          <Link className="flex items-center gap-2 bg-c1 w-fit py-2 px-5 text-white font-medium rounded-full ">
            <button
              onClick={() => {
                handleAddToCart();
                handleAddToCartBtn(gadget);
              }}
            >
              Add To Cart
            </button>
            <MdOutlineShoppingCart className="text-xl"></MdOutlineShoppingCart>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardWish;
