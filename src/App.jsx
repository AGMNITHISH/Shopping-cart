import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/content/Content";

const App = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const url = "https://dummyjson.com/products";

  async function productsApicall() {
    const response = await fetch(url);
    const result = await response.json();
    setData(result.products);
  }

  useEffect(() => {
    productsApicall();
  }, []);
  return (
    <div className="bg-black text-white flex  flex-wrap   font-sans">
      <Header cartData={cartData} />
      <Content data={data} setCartData={setCartData} cartData={cartData} />
    </div>
  );
};

export default App;
