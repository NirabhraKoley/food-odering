import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ItemCard } from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  // console.log(cartItem);
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800 my-3">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItem.length > 0 ? (
          cartItem.map((food) => {
            return <ItemCard key={food.id} food={food} />;
          })
        ) : (
          <h1 className="text-center text-xl font-bold text-gray-800">
            Your Cart Is Empty
          </h1>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          {totalQty > 0 ? (
            <button
              onClick={() => navigate("/success")}
              className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-2"
            >
              CheckOut
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-yellow-500 shadow-md text-5xl p-3 absolute left-4 top-80 hover:text-white hover:bg-green-500 transition-all duration-5 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};
