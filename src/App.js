import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
