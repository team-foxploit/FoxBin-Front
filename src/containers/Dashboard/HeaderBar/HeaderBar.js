import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import './HeaderBar.css';

import { logout } from "../../../store/actions/authActions";

const HeaderBar = props => {
  return (
        <div className="row bg-dark mb-0 d-flex justify-content-between">
            <nav className="nav">
                <NavLink className="nav-link bg-info" onClick={props.constrolSidebar}><i className="material-icons sidebar-toggler">menu</i></NavLink>
                <NavLink className="nav-link" to="/integra">Automation is Enabled</NavLink>
            </nav>
            {props.username ?
                <span className="navbar-text pr-3 pt-2 text-white-50">
                    You're logged in as {props.username} (<NavLink className="logout-link" role="button" onClick={props.logout}>Logout</NavLink>)
                </span>
                    :
                null
            }
      </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.auth.user.username
  };
};

HeaderBar.propTypes = {
  username: propTypes.string.isRequired,
  logout: propTypes.func.isRequired,
  controlSidebar: propTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(HeaderBar);
