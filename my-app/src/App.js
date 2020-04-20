import React from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonPannel from "./components/ButtonPannel";

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  // handleClick = (buttonName) => {
  //   this.setState(calculate(buttonName));
  // };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.total || this.state.next || "0"} />
        <ButtonPannel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
