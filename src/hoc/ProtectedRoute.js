import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// import { loadUser } from "../store/actions/authActions";

const ProtectedRoute = ({
  isAuthenticated,
  isLoading,
  foxToken,
  loadUser,
  component: Component,
  post,
  ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isLoading) {
                    return <h2>Loading...</h2>;
                } else if (!isAuthenticated && foxToken === null) {
                    return <Redirect to="/signin" />;
                }else{
                    return <Component {...props} />;
                }
            }}
            />
    );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    foxToken: state.auth.foxToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
