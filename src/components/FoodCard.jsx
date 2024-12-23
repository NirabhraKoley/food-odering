import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

export const FoodCard = ({ food, handleToast }) => {
  //   console.log(food);
  const dispatch = useDispatch();
  const { img, name, price, rating } = food;
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{food.name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <p className="text-sm font-normal">{food.desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center ">
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => {
            const { id, name, price, rating, img } = food;
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
