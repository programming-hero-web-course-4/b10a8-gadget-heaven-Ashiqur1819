import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    return (
      <div className="p-4">
        <NavLink to={`/category/${category.category}`} >
          <button className="btn w-full bg-base-200 text-c3 text-base rounded-full">
            {category.category}
          </button>
        </NavLink>
      </div>
    );
};

export default Category;