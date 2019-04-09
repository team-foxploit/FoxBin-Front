import React, { Component } from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";
// import Graph from "./components/Graph";
import Navbar from './components/Navbar/Navbar';
import Plot from './containers/Dashboard/Plot/Plot';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dashboard /> */}
        <Navbar />
        {/* <div className="center">
        </div> */}
        <Dashboard />
        {/* <Graph /> */}
        <Plot asset="EUR/USD" />
      </div>
    );
  }
}

export default App;
