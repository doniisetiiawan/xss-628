import React, {Component} from "react";
import Header from "../shared/components/layout/Header";

import Home from "./Home/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" />
        <Home />
      </div>
    );
  }
}

export default App;
