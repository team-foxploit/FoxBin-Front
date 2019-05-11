import React from "react";
import Fragment from "../../../hoc/Fragment";
import { NavLink } from "react-router-dom";
import "./IconSideBar.css";

const IconSideBar = props => {
  return (
    <Fragment>
        <div className="col-xm-1 px-0" id="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item shadow">
                    <NavLink className="nav-link" exact to="/dashboard">
                        <i className="material-icons text-secondary">home</i>
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/history">
                        <i className="material-icons text-primary">history</i>
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/predictions">
                        <i className="material-icons text-success">swap_calls</i>
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/automata">
                        <i className="material-icons text-info">border_vertical</i>
                    </NavLink>
                </li>
                <li className="nav-item shadow">
                    <NavLink className="nav-link" to="/dashboard/integra">
                        <i className="material-icons text-danger">code</i>
                    </NavLink>
                </li>
            </ul>
        </div>
    </Fragment>
  );
};

export default IconSideBar;
