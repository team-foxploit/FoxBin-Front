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
// import style from "./App.module.css";
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
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '80px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

class App extends Component {
  render() {
    // console.log(window.location.href.split("=")[2]);
    // const token = window.location.href.split("=")[2];
    // if (token) {
    //   // Action
    //   console.log(token);
    // }
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Alert />
            <BrowserRouter>
                <Navbar />
                <main className="mt-3">
                    <Switch>
                        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </main>
            </BrowserRouter>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
