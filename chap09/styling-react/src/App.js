import "./App.css";
import { Component } from "react";
import SassComponent from "./components/SassComponent";
import CSSModule from "./components/CSSModule";
import StyledComponent from "./components/StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;
