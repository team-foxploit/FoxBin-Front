import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

// CHECK isAuthenticated

const ProtectedRoute = ({ component: Component, post, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    posts: state.blog
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
