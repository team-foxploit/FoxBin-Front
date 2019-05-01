import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";

import { logout } from "../../store/actions/authActions";

const Navbar = props => {
  const GuestLinks = (
    <React.Fragment>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
  const AuthLinks = (
      <React.Fragment>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <span className="ml-auto">
          <button className="btn btn-md btn-light" onClick={props.logout}>
            Sign Out
          </button>
        </span>
      </React.Fragment>
    );

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        FoxBinary
      </NavLink>
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
        {
          props.isAuthenticated ?
          AuthLinks
          :
          GuestLinks
         }
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

Navbar.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Navbar);
