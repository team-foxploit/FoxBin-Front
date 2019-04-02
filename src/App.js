import React, { Component } from "react";
import "./App.css";
// import Dashboard from 'coreui-react-starter/React_Full_Project/src/containers/Full';
import Dashboard from './containers/Dashboard/Dashboard';
// import Graph from './components/Graph';
import Graph from './containers/Dashboard/Graph/Graph';
// import BinaryChart from './components/BinaryChart';

class App extends Component {
  render() {
  //   const ticks = [
  //     { epoch: 123, quote: 95.4 },
  //     { epoch: 124, quote: 95.3 },
  //     { epoch: 125, quote: 95.6 }
  // ];
    return (
      <div className="App">
        {/* <Dashboard /> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="center">
          <Graph />
          <Dashboard />
          {/* <BinaryChart ticks={ticks}/> */}
        </div>
      </div>
    );
  }
}

export default App;
