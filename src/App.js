import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Front from "./components/front";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="body">
            <Header />
            <div className="main">
              <Route path="/" exact component={Front} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
