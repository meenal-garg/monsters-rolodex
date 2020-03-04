import React from "react";
import "./SearchBox.css";

function SearchBox({ placeholder, HandleClick }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={HandleClick}
    />
  );
}

export default SearchBox;
