import React from "react";
import Fragment from "../../../hoc/Fragment";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = props => {
  return (
    <Fragment>
        <div className="col-md-3 d-none px-0 d-md-block sidebar">
            <ul className="nav flex-column">
                <li className="nav-item shadow">
                    <NavLink className="nav-link" exact to="/dashboard">
                        <i className="material-icons text-secondary">home</i>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/history">
                        <i className="material-icons text-primary">history</i>
                        History
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/predictions">
                        <i className="material-icons text-success">swap_calls</i>
                        Predictions
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/automata">
                        <i className="material-icons text-info">border_vertical</i>
                        Automation
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/integra">
                        <i className="material-icons text-danger">code</i>
                        Integrations
                    </NavLink>
                </li>
            </ul>
        </div>
    </Fragment>
  );
};

export default Sidebar;
