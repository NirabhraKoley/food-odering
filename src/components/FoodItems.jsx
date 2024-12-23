import React from "react";
import { FoodCard } from "./FoodCard";
import FoodData from "../api/FoodData";
import toast, { Toaster } from "react-hot-toast";

export const FoodItems = () => {
  // console.log(FoodData);
  const handleToast = (name) => {
    toast.success(`Added ${name}`)
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-center mx-6 my-10">
        {FoodData.map((food) => {
          return <FoodCard key={food.id} food={food} handleToast={handleToast}/>;
        })}
      </div>
    </>
  );
};
