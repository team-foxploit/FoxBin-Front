// React
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// React-alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Redux strore
import { Provider } from "react-redux";
import store from "./store/store";

// Styles
import style from "./App.module.css";
// import "./App.global.css";

// Components
import Alert from "./components/Alert/Alert";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Dashboard from "./containers/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./containers/Dashboard/Auth/Signin";
import Register from "./containers/Dashboard/Auth/Register";
// import Plot from "./containers/Dashboard/Plot/Plot";
// import Graph from "./components/Graph";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '90px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

class App extends Component {
  render() {
    // console.log(window.location.href.split("=")[2]);
    const token = window.location.href.split("=")[2];
    if (token) {
      // Action
      console.log(token);
    }
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          {/* <Signin /> */}
          <Alert />
          <div className={style.App}>
            <BrowserRouter>
              <Navbar />
              {/* <div className="container-fluid" id="content"> */}
                <main role="main">
                  {/* Add className="main-content" for each component's first child element */}
                  <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/register" component={Register} />
                  </Switch>
                </main>
              {/* </div> */}
            </BrowserRouter>
            {/* <div className="container-fluid">
          <div className={style.CardMargin}>
            <div className="row justify-content-md-center">
              <div className="col-md-8">
                <div className="card text-white bg-info">
                  <div className="card-header">FoxBinary Trading</div>
                  <div className="card-body">
                    <h5 className="card-title">You can trade once after authenticated using binary.com credentials</h5>
                    <p className="card-text">
                      You can manually trade based on your decision although we give the best decision using our predition system.
                      So, we strongly recommend you our prediction system.  
                    </p> */}
            {/* <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Descicion
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Rise</button>
                        <button className="dropdown-item" type="button">Fall</button>
                      </div>
                    </div> */}
            {/* <button className="btn btn-primary" type="button" onClick={this.handleClick} > */}
            {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Loading... */}
            {/* <a href="https://oauth.binary.com/oauth2/authorize?app_id=16334">Login</a>
                    </button>
                  </div>
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
        </div> */}
          </div>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
