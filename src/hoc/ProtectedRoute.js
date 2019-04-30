import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// CHECK isAuthenticated

const ProtectedRoute = ({
  isAuthenticated,
  component: Component,
  post,
  ...rest
}) => {
  if (!isAuthenticated) {
    return <Redirect to="/signin" />;
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

// ProtectedRoute.propTypes = {
//   isAuthenticated: propTypes.bool.isRequired
// }

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
