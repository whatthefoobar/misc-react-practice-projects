import React from "react";
import { useState } from "react";
import colorNames from "colornames";

const SearchBox = ({
  color,
  setColor,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  console.log(color);
  return (
    <form
      className="addForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="addColor">Add Color</label>
      <input
        autoFocus
        id="addColor"
        type="text"
        placeholder="Add Color "
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle text color
      </button>
    </form>
  );
};

export default SearchBox;
