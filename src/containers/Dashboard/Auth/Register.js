import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    user: {
      username: {
        value: null,
        valid: false
      },
      email: {
        value: null,
        valid: false
      },
      first_name: {
        value: null,
        valid: false
      },
      last_name: {
        value: null,
        valid: false
      },
      password: {
        value: null,
        valid: false
      },
      password2: {
        value: null,
        valid: false
      }
    },
    formValidity: false,
    password1Error: true,
    password2Error: true
  };

  // triggered on change of states
  inputChangedHandler = event => {
    const updatedUser = {
      ...this.state.user
    };
    const updatedFormElement = {
      ...updatedUser[event.target.id]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.validateField(
      event.target.id,
      updatedFormElement.value
    );
    updatedUser[event.target.id] = updatedFormElement;
    this.setState({
      user: updatedUser
    });
  };

  validateField = (id, value) => {
    switch (id) {
      case "email":
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return emailTest.test(value);
      case "password":
        if (value.length >= 8) {
          this.setState({
            password1Error: false
          });
          return true;
        } else {
          this.setState({
            password1Error: true
          });
        }
        return false;
      case "password2":
        if (this.state.user.password.value === value) {
          this.setState({
            password2Error: false
          });
          return true;
        } else {
          this.setState({
            password2Error: true
          });
        }
        return false;
      default:
        return value.trim() !== "";
    }
  };

  // triggered on Submit
  handleSubmit = event => {
    event.preventDefault();
    let validity = true;
    for (const key in this.state.user) {
      validity = validity && this.state.user[key].valid;
    }
    this.setState(
      {
        formValidity: validity
      }
    );
    if (this.state.formValidity) {
      const user = {
        username: this.state.user.username.value,
        email: this.state.user.email.value,
        first_name: this.state.user.first_name.value,
        last_name: this.state.user.last_name.value,
        password: this.state.user.password.value,
      };
      console.log(user);
    }
  };

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
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      aria-describedby="firstNameHelp"
                      placeholder="First Name"
                      onChange={this.inputChangedHandler}
                    />
                    <small
                      id="firstNameHelp"
                      className="form-text text-primary"
                    >
                      *optional
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      aria-describedby="lastNameHelp"
                      placeholder="Last Name"
                      onChange={this.inputChangedHandler}
                    />
                    <small id="lastNameHelp" className="form-text text-primary">
                      *optional
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="userNameHelp"
                    placeholder="Username"
                    onChange={this.inputChangedHandler}
                  />
                  <small id="userNameHelp" className="form-text text-muted">
                    Your username should be unique.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.inputChangedHandler}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="passwordHelp"
                      placeholder="Password"
                      onChange={this.inputChangedHandler}
                    />
                    {this.state.password1Error ? (
                      <small
                        id="passwordHelp"
                        className="form-text text-warning"
                      >
                        Your password should be at least of 8 characters length.
                      </small>
                    ) : null}
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password2"
                      aria-describedby="confirmPasswordHelp"
                      placeholder="Re-type Password"
                      onChange={this.inputChangedHandler}
                    />
                    {this.state.password2Error ? (
                      <small
                        id="confirmPasswordHelp"
                        className="form-text text-warning"
                      >
                        Passwords should be matched.
                      </small>
                    ) : null}
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
