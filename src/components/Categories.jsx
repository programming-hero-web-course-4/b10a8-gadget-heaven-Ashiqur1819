import { useEffect, useState } from "react";
import Category from "./Category";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="py-6 px-4 bg-white rounded-xl">
      <div className="p-4">
        <NavLink
          className="btn w-full bg-base-200 text-c2 text-base rounded-full"
          to="/"
        >
          All Products
        </NavLink>
      </div>
      {categories.map((category, index) => (
        <Category category={category} key={index}></Category>
      ))}
    </div>
  );
};

export default Categories;
