import React from "react";
import { FoodCard } from "./FoodCard";
import FoodData from "../api/FoodData";

export const FoodItems = () => {
  // console.log(FoodData);

  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-center mx-6 my-10">
      {FoodData.map((food) => {
        return <FoodCard key={food.id} food={food} />;
      })}
    </div>
  );
};
