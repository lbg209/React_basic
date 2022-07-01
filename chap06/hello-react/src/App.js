import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPratice from "./components/EventPratice";
import EventFunction from "./components/EventFunction";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
import { Component } from "react";
import IterationSample from "./components6/IterationSample";
import LifeCycleSample from "./compoents7/LifeCycleSample";
import ErrorBoundary from "./compoents7/ErrorBoundary";
/* 주석입니다. */
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
