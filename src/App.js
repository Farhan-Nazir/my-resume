import React, { Component } from "react";
import { Link } from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Main />
      </div>
    );
  }
}

export default App;
