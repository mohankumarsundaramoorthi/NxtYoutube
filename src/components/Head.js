import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    console.log(searchQuery);

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])      
      } else {        
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))

  };

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
        <div>
          <input
            className="w-1/2 p-1 px-2 border shadow-md border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="p-1 px-3 border shadow-md border-gray-400 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[31.5rem] shadow-lg rounded-lg absolute">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="shadow-sm hover:bg-gray-100 py-2 px-2 flex items-center"
                >
                  <img
                    className="mx-2 h-3"
                    alt="search"
                    src="/assets/search.png"
                  ></img>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 items-center">
        <img className="h-7" alt="user-icon" src="/assets/user-icon.png" />
      </div>
    </div>
  );
};

export default Head;
