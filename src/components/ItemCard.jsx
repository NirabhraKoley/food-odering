import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increamentQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

export const ItemCard = ({ food }) => {
  // console.log(food);
  const dispatch = useDispatch();
  const { img, name, price, rating, qty } = food;

  return (
    <div className="flex gap-2 shadow-md rounded-md p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(
            removeFromCart({
              id: food.id,
              name: food.name,
              price: food.price,
              rating: food.rating,
              qty: food.qtr,
            })
          );
          toast(`${name} Removed`, { icon: "😠" });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                food.qty > 1
                  ? dispatch(decrementQty({ id: food.id }))
                  : (food.qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                food.qty >= 1
                  ? dispatch(increamentQty({ id: food.id }))
                  : (food.qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
