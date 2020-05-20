import React from "react";
import "./style.css";

function SearchBar(props) {
  return ( 
      <div id="searchBar">
          <label htmlFor="search" className="SearchBar">{props.children}</label>
          <div>
              <input type="text" value={props.inputValue} onChange={props.friendsFilterOnChange}/>
          </div>
      </div>   
  );
}

export default SearchBar;