import { NavLink } from "react-router-dom";


const Categories = () => {
    return (
      <div className="flex flex-col w-11/12 gap-5 bg-white p-6 rounded-xl">
        <NavLink>
          <div className="w-full">
            <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
              All Products
            </button>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
              Laptops
            </button>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
              Tablets
            </button>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
              Phones
            </button>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
              Smart Watches
            </button>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
              Accessories
            </button>
          </div>
        </NavLink>
      </div>
    );
};

export default Categories;