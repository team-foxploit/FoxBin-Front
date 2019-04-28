import React from "react";
import propTypes from "prop-types";
import Fragment from "../../../hoc/Fragment";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = props => {
  return (
    <Fragment>
      <div className="col-sm-12 col-12 col-md-2 d-none d-sm-block">
        <nav className="sidebar" id="iconsidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-sm btn-outline-info"
                >
                  <i className="material-icons">chevron_left</i>
                </button>
                <NavLink className="nav-link" to="/dashboard">
                  <i className="material-icons">home</i>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  <i className="material-icons">history</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/predictions">
                  <i className="material-icons">swap_calls</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/automata">
                  <i className="material-icons">border_vertical</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/integra">
                  <i className="material-icons">code</i>
                </NavLink>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <NavLink
                className="d-flex align-items-center text-muted"
                to="#"
              />
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">
                  <i className="material-icons">account_circle</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login-his">
                  <i className="material-icons">visibility</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout" />
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
