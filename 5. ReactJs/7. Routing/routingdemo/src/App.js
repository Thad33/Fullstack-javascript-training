import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import { products } from "./data";
import { CategoriesProvider } from "./CategoriesContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoriesProvider products={products}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Products />}>
            <Route
              index
              element={<ProductsDisplay products={products} category={"all"} />}
            />
            <Route path={"/:category"} element={<ProductsDisplay />} />
          </Route>
          <Route path={"/products/:id"} element={<OneProduct products={products} />} />
        </Routes>
      </CategoriesProvider>
    </div>
  );
}

export default App;
