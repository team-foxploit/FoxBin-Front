import React, { Component } from "react";
import { Link } from "react-router-dom";
import BusinessChatImg from "../../../assets/business-chart.jpg";

class Signin extends Component {
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
                <form>
                  <div className="form-group">
                    <label htmlFor="signInEmail">Username</label>
                    <input
                      type="email"
                      className="form-control"
                      id="signInEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email address"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="signInPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="signInPassword"
                      placeholder="Password"
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

export default Signin;
