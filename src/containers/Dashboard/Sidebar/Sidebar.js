import React from "react";
import propTypes from "prop-types";
import Fragment from "../../../hoc/Fragment";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = props => {
  return (
    <Fragment>
      <div className="col-md-2 d-none d-md-block bg-light">
        <nav className="sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  <i className="material-icons">home</i>
                  Home<span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  <i className="material-icons">history</i>
                  History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/predictions">
                  <i className="material-icons">swap_calls</i>
                  Predictions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/automata">
                  <i className="material-icons">border_vertical</i>
                  Automation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/integra">
                  <i className="material-icons">code</i>
                  Integrations
                </NavLink>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Account settings</span>
              <NavLink className="d-flex align-items-center text-muted" to="#" />
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  <i className="material-icons">account_circle</i>
                  Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login-his">
                  <i className="material-icons">visibility</i>
                  Login history
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
