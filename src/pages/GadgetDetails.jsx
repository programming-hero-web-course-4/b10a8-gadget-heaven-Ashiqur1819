import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";



const GadgetDetails = () => {

    const gadgets = useLoaderData()
   const {product_id} = useParams()

   const gadget = gadgets.find(gadget => gadget.product_id === product_id);
   const {product_image, product_title, price, availability, description, Specification, rating, warranty_period} = gadget

    return (
      <div className="mb-96">
        <div className="relative">
          <div className="h-96 text-center space-y-3 pt-12 mx-auto px-4 md:px-8 lg:px-12 bg-c1">
            <h2 className="text-4xl font-bold text-white">Product Details</h2>
            <p className="text-white max-w-4xl mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="flex items-center gap-12 max-w-5xl mx-auto p-6 border bg-white rounded-xl absolute top-52 right-0 left-0">
            <div>
              <figure>
                <img
                  src={product_image}
                  className="w-[400px] rounded-xl"
                  alt=""
                />
              </figure>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-c2 mb-2">
                {product_title}
              </h3>
              <h4 className="text-c3 font-semibold mb-2">Price: ${price}</h4>
              <p className="bg-green-50 py-1 px-3 rounded-full w-fit text-center border border-green-600 font-medium text-green-600 mb-2">
                {availability ? "In Stock" : "Not Available"}
              </p>
              <p className="text-c3 mb-2">{description}</p>
              <p className="font-bold text-c2">Specification: </p>
              <p className="mb-2 text-c3">
                {Specification.map((specific) => (
                  <li className="list-decimal">{specific}</li>
                ))}
              </p>
              <h4 className="mb-2 text-c3"><span className="font-bold text-c2">Rating:</span> {rating}</h4>
              <p className="text-c3 mb-2"><span className="font-bold text-c2">Warranty:</span> {warranty_period}</p>
              <div className="flex items-center gap-5">
                <div>
                  <Link className="flex items-center gap-2 bg-c1 w-fit py-2 px-5 text-white font-medium rounded-full">
                    <button>Add To Cart</button>
                    <MdOutlineShoppingCart className="text-xl"></MdOutlineShoppingCart>
                  </Link>
                </div>
                <div className="text-xl md:text-xl bg-white p-2 md:p-3 rounded-full border">
                  <Link>
                    <CiHeart></CiHeart>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GadgetDetails;