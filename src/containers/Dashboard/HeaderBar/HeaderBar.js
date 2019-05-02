import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import './HeaderBar.css';

import propTypes from "prop-types";

const HeaderBar = props => {
    console.log(props.username);
  return (
        <div className="row bg-dark mb-0 d-flex justify-content-between">
            <nav className="nav">
                <NavLink className="nav-link bg-info" href="#" onClick={props.constrolSidebar}><i className="material-icons sidebar-toggler">menu</i></NavLink>
                <NavLink className="nav-link" href="/dashboard">Dashboard</NavLink>
            </nav>
            {props.username ?
                <span class="navbar-text pr-3 pt-2 text-white-50">
                    You're logged in as {props.username} (<span role="a" href="#">Logout</span>)
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
//
// Navbar.propTypes = {
//   isAuthenticated: propTypes.bool.isRequired,
//   logout: propTypes.func.isRequired
// };

export default connect(mapStateToProps)(HeaderBar);
