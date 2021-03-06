import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColor";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
