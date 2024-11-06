import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { HandleRemoveContex } from "../App";

const DashboardCart = ({ gadget }) => {
  const [handleRemove, handleDecreasePrice] = useContext(HandleRemoveContex);
  const { product_image, product_title, description, price } = gadget;

  return (
    <div className="md:flex items-center gap-6 border bg-white rounded-xl p-6 mb-6">
      <figure>
        <img src={product_image} className="lg:w-40 rounded-xl" alt="" />
      </figure>
      <div className="space-y-3 flex-grow">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-c2 font-bold">{product_title}</h3>
          <div className="text-xl text-red-600 font-semibold border border-red-600 p-1 rounded-full cursor-pointer">
            {" "}
            <RxCross2
              onClick={() => {
                handleRemove(gadget);
                handleDecreasePrice(price);
              }}
            ></RxCross2>
          </div>
        </div>
        <p className="text-c3">{description}</p>
        <h4 className="font-semibold text-c3">Price: ${price}</h4>
      </div>
    </div>
  );
};

export default DashboardCart;
