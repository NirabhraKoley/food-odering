import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
  const cartItem = useSelector((state) => state.cart.cart);
  return cartItem.lenght > 0 ? element : <Navigate to="/" />;
};
