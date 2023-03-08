import React, { useContext } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { CategoriesContext } from "../CategoriesContext";

function Products() {
  const categories = useContext(CategoriesContext);
  const navigate = useNavigate();
  const { category } = useParams();
  
  const handleCategoryNavigation = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div>
      <div className="productsLayout">
        <div>
          <div className="categories">
            {categories.map((category, index) => {
              return (
                <span
                  className={`category ${category === category ? "active" : ""}`}
                  key={index}
                  onClick={() => handleCategoryNavigation(category)}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
