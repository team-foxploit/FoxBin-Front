import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { login } from '../../../store/actions/authActions';

import BusinessChatImg from "../../../assets/business-chart.jpg";

class Signin extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  inputChangeHandler = e => {
    this.setState(
      {
        ...this.state,
        user: {
          ...this.state.user,
          [e.target.id]: e.target.value
        }
      },
      () => {
        console.log(this.state.user);
      }
    );
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state.user);
    this.props.login(this.state.user);
  };

  render() {
    return (
      <div style={{ marginTop: "12px" }}>
        <div
          className="card col-lg-6 col-md-10 main-content"
          style={{ padding: "0" }}
        >
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src={BusinessChatImg}
                className="card-img"
                alt="business_image"
                style={{ height: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">
                  Login to trade on Binary.com platform
                </h5>
                <form onSubmit={this.onSubmitHandler}>
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
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      SIGN IN
                    </button>
                  </div>
                </form>
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
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { login })(Signin);
