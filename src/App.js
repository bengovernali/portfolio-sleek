import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import Front from "./components/front";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Header />
          <div className="main">
            <Front />
            <div className="triangle-right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
