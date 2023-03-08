import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext([]);

export const CategoriesProvider = ({ children, products }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = products.map((p) => p.category);
    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};
