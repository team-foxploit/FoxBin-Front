import React from "react";
import propTypes from "prop-types";
import Fragment from "../../../hoc/Fragment";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = props => {
  return (
    <Fragment>
        <div className="col-md-3 d-none px-0 d-md-block sidebar">
            <ul class="nav flex-column">
                <li class="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard">
                        <i className="material-icons text-secondary">home</i>
                        Home
                    </NavLink>
                </li>
                <li class="nav-item shadow">
                    <NavLink className="nav-link" to="/history">
                        <i className="material-icons text-primary">history</i>
                        History
                    </NavLink>
                </li>
                <li class="nav-item shadow">
                    <NavLink className="nav-link" to="/predictions">
                        <i className="material-icons text-success">swap_calls</i>
                        Predictions
                    </NavLink>
                </li>
                <li class="nav-item shadow">
                    <NavLink className="nav-link" to="/automata">
                        <i className="material-icons text-info">border_vertical</i>
                        Automation
                    </NavLink>
                </li>
                <li class="nav-item shadow">
                    <NavLink className="nav-link" to="/integra">
                        <i className="material-icons text-danger">code</i>
                        Integrations
                    </NavLink>
                </li>
            </ul>
        </div>
    </Fragment>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
