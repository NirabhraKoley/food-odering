import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu";
import { FoodItems } from "../FoodItems";

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <CategoryMenu />
      <FoodItems />
      <Outlet />
      <Footer />
    </>
  );
};
