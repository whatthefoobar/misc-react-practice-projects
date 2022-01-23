import React from "react";
import { useState } from "react";

const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <p>{color ? color : "Empty Value"}</p>
    </div>
  );
};

export default ColorBox;
