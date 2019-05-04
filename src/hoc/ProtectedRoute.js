import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { SwapSpinner } from "react-spinners-kit";

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
                    return (
                      <div className="container d-flex justify-content-center">
                        <div className="row m-5 p-5">
                          <div className="col m-5 p-5">
                            <SwapSpinner
                                size={60}
                                color="#686769"
                                loading={isLoading}
                            />
                          </div>
                        </div>
                      </div>
                    );
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

// const mapDispatchToProps = dispatch => {
//   return {
//     loadUser: () => dispatch(loadUser())
//   };
// };

export default connect(mapStateToProps)(ProtectedRoute);
