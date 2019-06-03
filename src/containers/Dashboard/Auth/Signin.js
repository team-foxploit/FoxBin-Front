import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { login } from '../../../store/actions/authActions';

import BusinessChatImg from "../../../assets/business-chart.jpg";
import { WhisperSpinner } from "react-spinners-kit";

class Signin extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  static propTypes = {
    login: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
  }

  inputChangeHandler = e => {
    this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          [e.target.id]: e.target.value
        }
      });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.login(this.state.user);
  };

  render() {

    if(this.props.isAuthenticated && !this.props.isLoading){
      return (
        <Redirect to="/dashboard" />
      )
    }

    return (
        <div className="container mt-5 text-center col-lg-8 mb-3">
            <div className="card bg-light">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={BusinessChatImg}
                            className="card-img"
                            alt="business_image"
                            style={{ height: "100%" }}
                            />
                    </div>
                    <div className="col-md-8">
                        <div className="card-header pt-4"><h5>Login to trade on Binary.com platform</h5></div>
                        <div className="card-body">
                            {this.props.isLoading ? 
                              <div className="col my-5 py-5 d-flex justify-content-center">
                                <WhisperSpinner
                                          size={50}
                                          color="#126246f"
                                          loading={!this.props.isLoaded}
                                />
                              </div>
                              :
                              <form className="text-left" onSubmit={this.onSubmitHandler}>
                                  <div className="form-group">
                                      <label htmlFor="username">Username</label>
                                      <input
                                          type="text"
                                          className="form-control"
                                          id="username"
                                          aria-describedby="emailHelp"
                                          placeholder="Username"
                                          onChange={this.inputChangeHandler}
                                          value={this.state.user.username}
                                          />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="password">Password</label>
                                      <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          placeholder="Password"
                                          onChange={this.inputChangeHandler}
                                          value={this.state.user.password}
                                          />
                                  </div>
                                  <div className="form-group">
                                      <div className="form-group form-check">
                                          <input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="rememberCheck"
                                              />
                                          <label
                                              className="form-check-label"
                                              htmlFor="rememberCheck"
                                              >
                                              Remember me
                                          </label>
                                      </div>
                                  </div>
                                  <div className="form-group text-center">
                                      <button type="submit" className="btn btn-primary">
                                          SIGN IN
                                      </button>
                                  </div>
                              </form>
                            }

                            <div className="col">
                                <small className="card-text">
                                    If you do not have an account, please{" "}
                                    <Link to="/register">register</Link> first.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
  }
}

export default connect(mapStateToProps, { login })(Signin);
