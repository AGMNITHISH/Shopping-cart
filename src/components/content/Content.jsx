import React from "react";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";

import Cart from "./Page/Cart";
const Content = ({ data, setCartData, cartData }) => {
  return (
    <>
      <div className="text-white min-h-screen	min-w-full">
        <Routes>
          {" "}
          <Route
            path="/"
            element={
              <ProductList
                data={data}
                setCartData={setCartData}
                cartData={cartData}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartData={cartData} setCartData={setCartData} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default Content;
