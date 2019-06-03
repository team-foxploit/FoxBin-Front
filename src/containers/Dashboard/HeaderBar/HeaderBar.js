import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import './HeaderBar.css';

import { logout } from "../../../store/actions/authActions";

const HeaderBar = props => {

  if(props.isValidating && !props.isValidated){
    return (
      <div className="row bg-dark mb-0 d-flex justify-content-between">
        <nav className="nav">
            <NavLink className="nav-link bg-info" to="#" onClick={props.constrolSidebar}><i className="material-icons sidebar-toggler">menu</i></NavLink>
              <NavLink className="nav-link text-yellow" to="/dashboard/integra">Automation info is loading</NavLink>
        </nav>
        {props.username ?
            <span className="navbar-text pr-3 pt-2 text-white-50">
                You're logged in as {props.username} (<NavLink className="logout-link" role="button" to="#" onClick={props.logout}>Logout</NavLink>)
            </span>
                :
            null
        }
      </div>
    );
  }else if(props.isValidated && !props.isValidating){
    return (
      <div className="row bg-dark mb-0 d-flex justify-content-between">
        <nav className="nav">
            <NavLink className="nav-link bg-info" to="#" onClick={props.constrolSidebar}><i className="material-icons sidebar-toggler">menu</i></NavLink>
            <NavLink className="nav-link text-success" to="/dashboard/integra">Automation is Enabled</NavLink>
        </nav>
        {props.username ?
            <span className="navbar-text pr-3 pt-2 text-white-50">
                You're logged in as {props.username} (<NavLink className="logout-link" role="button" to="#" onClick={props.logout}>Logout</NavLink>)
            </span>
                :
            null
        }
      </div>
    );
  }else{
    return (
          <div className="row bg-dark mb-0 d-flex justify-content-between">
              <nav className="nav">
                <NavLink className="nav-link bg-info" to="#" onClick={props.constrolSidebar}><i className="material-icons sidebar-toggler">menu</i></NavLink>
                <NavLink className="nav-link text-danger" to="/dashboard/integra">Automation is disabled. Please authorize with binary.com using your credentials.</NavLink>
              </nav>
              {props.username ?
                  <span className="navbar-text pr-3 pt-2 text-white-50">
                      You're logged in as {props.username} (<NavLink className="logout-link" role="button" to="#" onClick={props.logout}>Logout</NavLink>)
                  </span>
                      :
                  null
              }
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    username: state.auth.user.username,
    isValidated: state.webapi.isValidated,
    isValidating: state.webapi.isValidating,
  };
};

HeaderBar.propTypes = {
  username: propTypes.string.isRequired,
  isValidated: propTypes.bool,
  isValidating: propTypes.bool,
  logout: propTypes.func.isRequired,
  controlSidebar: propTypes.func
};

export default connect(mapStateToProps, { logout })(HeaderBar);
