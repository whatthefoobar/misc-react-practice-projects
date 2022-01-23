import React from "react";
import { useState } from "react";

const SearchBox = ({ color, setColor }) => {
  console.log(color);
  return (
    <form
      className="addForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* <label htmlFor="addColor">Add Color</label> */}
      <input
        autoFocus
        id="addColor"
        type="text"
        placeholder="Add Color "
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      {/* <button type="submit">+</button> */}
    </form>
  );
};

export default SearchBox;
