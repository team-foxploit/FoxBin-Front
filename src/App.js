import React, { Component } from "react";
import style from "./App.module.css";
import Dashboard from "./containers/Dashboard/Dashboard";
// import Graph from "./components/Graph";
import Navbar from './components/Navbar/Navbar';
import Plot from './containers/Dashboard/Plot/Plot';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Navbar />
        <Dashboard />
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card text-white bg-info">
                <div className="card-header">FoxBinary Prediction</div>
                <div className="card-body">
                  <h5 className="card-title">Please wait...</h5>
                  <p className="card-text">
                    You can check whether it's the right time to bid or not based on the following result.
                    Result might take few seconds since, we'll give the best option from our ML prediction just for you...</p>
                  <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <Plot asset="EUR/USD" />
            </div>
            <div className="col-md-3">
              <div className="card text-white bg-dark">
                <div className="card-header">FoxBinary Prediction</div>
                <div className="card-body">
                  <h5 className="card-title">Please wait...</h5>
                  <p className="card-text">
                    You can check whether it's the right time to bid or not based on the following result.
                    Result might take few seconds since, we'll give the best option from our ML prediction just for you...</p>
                  <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
