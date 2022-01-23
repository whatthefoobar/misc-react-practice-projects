import React from "react";
import { useState } from "react";

const ColorBox = ({ color, hexValue, isDarkText }) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color, color: isDarkText ? "#000" : "#fff" }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColorBox;
