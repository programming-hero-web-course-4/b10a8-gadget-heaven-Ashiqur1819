import { NavLink } from "react-router-dom";
import "../components/Category.css";

const Category = ({ category }) => {
  return (
    <div className="p-4">
      <NavLink
        className="btn w-full bg-base-200 text-c2 text-base rounded-full"
        to={`/category/${category.category}`}
      >
        {category.category}
      </NavLink>
    </div>
  );
};

export default Category;
