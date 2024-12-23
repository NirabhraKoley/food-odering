import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/SearchSlice";

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6">
      <div className="mb-2">
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Nirabhra Food Ordering</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search Here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};
