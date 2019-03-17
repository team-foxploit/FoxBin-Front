import React, { Component } from 'react';
import './App.css';
// import Dashboard from 'coreui-react-starter/React_Full_Project/src/containers/Full';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dashboard /> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
