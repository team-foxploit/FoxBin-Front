import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { loadUser } from "../store/actions/authActions";

const ProtectedRoute = ({
  isAuthenticated,
  foxToken,
  loadUser,
  component: Component,
  post,
  ...rest
}) => {
  if (!isAuthenticated) {
    if (foxToken) {
      console.log("load user");
      loadUser();
      return <Redirect to="/signin" />;
    } else {
      return <Redirect to="/signin" />;
    }
  } else {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />;
        }}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    foxToken: state.auth.foxToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoute);
