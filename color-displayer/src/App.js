import "./App.css";
import ColorBox from "./components/ColorBox";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <SearchBox
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
