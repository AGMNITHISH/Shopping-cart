import React from "react";
import { FaOpencart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = ({ cartData }) => {
  return (
    <div>
      <header className="h-16 w-screen text-white  justify-between bg-slate-500 flex items-center py-4 px-8">
        <div className="flex font-mono">
          <Link to="/" className="flex">
            <FaOpencart className="text-2xl text-lime-500" />
            <span className="pl-2">
              Online <span className="text-lime-500 italic text-xl"> Cart</span>
            </span>
          </Link>
        </div>

        <div className="text-xl">
          <span>
            <Link to="/cart">
              <div className="bg-red-500 text-center rounded-full text-sm text-white relative left-3 top-1">
                {" "}
                {cartData?.length}
              </div>

              <TiShoppingCart className="text-2xl" />
            </Link>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
