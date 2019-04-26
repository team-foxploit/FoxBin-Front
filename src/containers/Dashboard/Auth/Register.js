import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div style={{ marginTop: "12px" }}>
        <div
          className="col-lg-10 col-md-10 main-content"
          style={{ padding: "0" }}
        >
          <div className="row no-gutters">
            <div className="col-md-12">
              <h3>Register for an account to trade on Binary.com platform</h3>
              <p>
                You can use the automation system of foxbinary with a valid user
                account.
              </p>
              <small className="card-text">
                If you already have an account, <Link to="/signin">login</Link>{" "}
                instead.
              </small>
              <br />
              <br />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="registerFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="registerFirstName"
                      aria-describedby="firstNameHelp"
                      placeholder="First Name"
                    />
                    <small
                      id="firstNameHelp"
                      className="form-text text-primary"
                    >
                      *optional
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="registerLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="registerLastName"
                      aria-describedby="lastNameHelp"
                      placeholder="Last Name"
                    />
                    <small id="lastNameHelp" className="form-text text-primary">
                      *optional
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="registerUsername">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerUsername"
                    aria-describedby="userNameHelp"
                    placeholder="Username"
                  />
                  <small id="userNameHelp" className="form-text text-muted">
                    Your username should be unique.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="registerPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerPassword"
                      aria-describedby="passwordHelp"
                      placeholder="Password"
                    />
                    <small id="passwordHelp" className="form-text text-warning">
                      Your password should be at least of 8 characters length.
                    </small>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="registerConfirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerConfirmPassword"
                      aria-describedby="confirmPasswordHelp"
                      placeholder="Re-type Password"
                    />
                    <small
                      id="confirmPasswordHelp"
                      className="form-text text-warning"
                    >
                      Passwords should be matched.
                    </small>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
