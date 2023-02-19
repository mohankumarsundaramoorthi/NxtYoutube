import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 pl-5 my-2 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer"
          alt="menu"
          src="/assets/hamburger-menu.png"
        ></img>
        <a href="/">
        <img
          className="h-6 mx-2"
          alt="youtube-logo"
          src="/assets/Youtube-logo.png"
        ></img>
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 p-1 px-10 border shadow-md border-gray-400 rounded-l-full"
          type="text"
        ></input>
        <button className="p-1 px-3 border shadow-md border-gray-400 rounded-r-full">
          Search
        </button>
      </div>
      <div className="flex col-span-1 items-center">
        <img className="h-7" alt="user-icon" src="/assets/user-icon.png" />
      </div>
    </div>
  );
};

export default Head;
