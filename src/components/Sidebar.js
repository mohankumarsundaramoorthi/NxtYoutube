import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 h-auto shadow-lg w-44" style={{display:"flex", flexDirection:"column", justifyContent:"start"}}>
      <div>
        <h1 className="font-bold"> Explore </h1>
        <ul>
          <li> 
            <Link to="/">Home</Link> </li>
          <li> Shorts </li>
          <li> Videos </li>
          <li> Live</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-5"> Watch Later </h1>
        <ul>
          <li> Music </li>
          <li> Sports </li>
          <li> Games </li>
          <li> Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-5"> Subscriptions </h1>
        <ul>
          <li> Music </li>
          <li> Sports </li>
          <li> Games </li>
          <li> Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-5"> Subscriptions2 </h1>
        <ul>
          <li> Music </li>
          <li> Sports </li>
          <li> Games </li>
          <li> Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold pt-5"> Subscriptions3 </h1>
        <ul>
          <li> Music </li>
          <li> Sports </li>
          <li> Games </li>
          <li> Movies</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
