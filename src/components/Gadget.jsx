import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget;

  return (
    <div className="border bg-white p-5 rounded-xl space-y-5 flex flex-col">
      <div className="flex-grow">
        <figure>
          <img
            src={product_image}
            className="h-40 object-cover mx-auto"
            alt=""
          />
        </figure>
        <h3 className="text-xl font-semibold text-c2 mt-3">{product_title}</h3>
        <p className="text-c3 font-medium">Price: ${price}</p>
      </div>
      <Link to={`/gadget/${product_id}`}>
        <button className="text-left border-2 w-36 py-3 px-4 rounded-full border-c1 text-c1 font-medium">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Gadget;
