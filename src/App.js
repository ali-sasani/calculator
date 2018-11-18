import React, { Component } from "react";
import "./App.css";
import CalEntry from "./components/CalEntry";
import CalButtons from "./components/CalButtons";

class App extends Component {
  render() {
    return (
      <div id="app">
        {/* <CalEntry /> */}
        <CalButtons />
      </div>
    );
  }
}

export default App;
