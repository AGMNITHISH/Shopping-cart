import React from "react";
import ProdcutCard from "./ProdcutCard";

const ProductList = ({ data, setCartData, cartData }) => {
  return (
    <div className="grid grid-cols-4 gap-5  m-4">
      {data?.map((item, ind) => {
        return (
          <div key={ind}>
            <ProdcutCard
              key={ind}
              item={item}
              setCartData={setCartData}
              cartData={cartData}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
