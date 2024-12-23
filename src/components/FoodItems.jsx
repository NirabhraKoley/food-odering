import React from "react";
import { FoodCard } from "./FoodCard";
import FoodData from "../api/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export const FoodItems = () => {
  // console.log(FoodData);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => {
    toast.success(`Added ${name}`);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-center mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "ALL")
            return food.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard key={food.id} food={food} handleToast={handleToast} />
        ))}
      </div>
    </>
  );
};
