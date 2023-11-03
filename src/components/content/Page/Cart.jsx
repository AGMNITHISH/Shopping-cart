import React from "react";
import {
  BsFillCartXFill,
  BsFillCartPlusFill,
  BsFillCartDashFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiSolidCart } from "react-icons/bi";

const Cart = ({ cartData, setCartData }) => {
  const handleCartProduct = (item, view) => {
    let updateCart = [...cartData];
    const CheckIsExising = updateCart.find((data) => data.id === item.id);
    if (view === "add") {
      if (CheckIsExising) {
        CheckIsExising.quantity += 1;
      }
    } else if (view === "remove") {
      if (CheckIsExising) {
        CheckIsExising.quantity -= 1;
      }
    } else if (view === "delete") {
      updateCart = updateCart.filter((d) => d.id !== item.id);
    }
    setCartData(updateCart);
  };

  const calculateCartTotal = () => {
    const total = cartData.reduce((acc, cur) => {
      console.log(acc);
      return acc + cur.price * cur.quantity;
    }, 0);

    return total;
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {cartData.length > 0 ? (
        <>
          {cartData?.map((item, ind) => {
            return (
              <div
                className="block w-1/2 m-4 rounded px-9 py-3 bg-slate-400 "
                key={ind}
              >
                <div className="text-2xl tracking-widest text-black py-2">
                  {item.title}
                </div>
                <div className=" text-black"> {item.description}</div>
                <div className="tracking-widest text-black font-bold py-2">
                  ${item.price} * {item.quantity} = ${" "}
                  {item.price * item.quantity}
                </div>
                <button
                  type="button"
                  onClick={() => handleCartProduct(item, "add")}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <BsFillCartPlusFill />
                </button>

                <button
                  type="button"
                  disabled={item.quantity === 1}
                  onClick={() => handleCartProduct(item, "remove")}
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  <BsFillCartDashFill />
                </button>
                <button
                  type="button"
                  onClick={() => handleCartProduct(item, "delete")}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  {" "}
                  <BsFillCartXFill />
                </button>
              </div>
            );
          })}
          <div className="block w-1/2 m-4 rounded px-9 py-3 bg-slate-400 ">
            <div className="tracking-widest text-black font-bold py-2">
              {" "}
              Total = ${calculateCartTotal()}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <BiSolidCart className="text-7xl" />
          <div className="text-3xl font-mono">Your cart is empty</div>
          <Link to="/">
            <button
              type="button"
              class="px-8 py-2 my-4 text-white bg-blue-600 hover:bg-blue-800 rounded-full focus:outline-none disabled:opacity-100"
            >
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
