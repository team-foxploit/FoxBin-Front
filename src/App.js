// React
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// React-alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Redux strore
import { Provider } from "react-redux";
import store from "./store/store";
import { loadUser } from "./store/actions/authActions";
import { tickStream } from "./store/actions/tickActions";

// Styles
// import style from "./App.module.css";
import "./App.global.css";

// Components
import Alert from "./components/Alert/Alert";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
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
  componentDidMount(){
    store.dispatch(loadUser());
    store.dispatch(tickStream());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Alert />
            <BrowserRouter>
                <Navbar />
                <main className="mt-0">
                  <Route exact path="/" component={Home} />
                  <ProtectedRoute path="/dashboard" component={Dashboard} />
                  <Route path="/signin" component={Signin} />
                  <Route path="/register" component={Register} />
                </main>
                <Footer />
            </BrowserRouter>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
