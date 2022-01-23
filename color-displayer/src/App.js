import "./App.css";
import ColorBox from "./ColorBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <ColorBox color={color} />
      <SearchBox color={color} setColor={setColor} />
    </div>
  );
}

export default App;
