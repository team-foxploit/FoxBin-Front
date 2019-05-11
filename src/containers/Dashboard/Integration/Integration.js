import React, { Component } from "react";
import propTypes from "prop-types";

import { connect } from 'react-redux';
import { loadTokens, validateToken, addToken } from "../../../store/actions/tokenActions";
import { SHOW_ERROR } from "../../../store/actions/actionTypes";

import ListGroup from '../../../components/ListGroup/ListGroup';

import { WhisperSpinner } from "react-spinners-kit";

class Integration extends Component {
    state = {
      formInput: "",
      formError: false,
      token: null
    }

    static propTypes = {
        isAuthenticated: propTypes.bool.isRequired,
        binaryAPI: propTypes.object.isRequired,
        loadTokens: propTypes.func.isRequired,
        validateToken: propTypes.func.isRequired,
        addToken: propTypes.func.isRequired,
        alertZeroTokenError: propTypes.func.isRequired
      }

    componentDidMount(){
        if(this.props.isAuthenticated && !this.props.binaryAPI.isLoading){
            this.props.loadTokens();
        }
        var params = window.location.search.split("=");
        if(params.length > 1){
          const token = params[2].split("&")[0];
          console.log(token);
          this.setState({
            formInput: token
          })
        }
    }

    handleOAuth = (e) => {
      window.location = "https://oauth.binary.com/oauth2/authorize?app_id=17015";
    }

    handleValidation = () => {
      if(this.props.binaryAPI.tokens.length > 0){
        const latestToken = this.props.binaryAPI.tokens[0].token;
        this.props.validateToken(latestToken);
      }else{
        this.props.alertZeroTokenError();
      }
    }

    inputChangeHandler = (e) => {
      this.setState({
        formInput: e.target.value
      });
    }

    handleAddToken = (e) => {
      e.preventDefault();
      const token = {
        token: this.state.formInput
      };
      if(token.token.length > 0){
        this.props.addToken(token);
        this.setState({
          formError: false,
          formInput: ""
        });
      }else{
        this.setState({
          formError: true
        });
      }
    }

    render() {
    if (!this.props.binaryAPI.isLoading) {
        return (
          <div className="container my-3">
            <div className="row mb-3">
              <div className="col">
              <div className="card text-left">
                <div className="card-header">
                  <h3>Connect binary.com</h3>
                </div>
                <div className="card-body">
                  <h5 className="card-title">You can use our predication platform once after connecting with binary.com successefully</h5>
                  <p className="card-text">In this section, you can check whether the token you already got is valid by selecting <strong>validation check</strong>, or if not you can obtain a 
                  new one by selecting <strong>authorize now</strong> button.</p>
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <button className="btn btn-primary" onClick={this.handleValidation}>
                      <input type="radio" name="options" id="option1"  disabled={this.props.binaryAPI.isValidated} autoComplete="on"/>validation check
                    </button>
                    <button className="btn btn-primary" onClick={this.handleOAuth}>
                      <input type="radio" name="options" id="option2" disabled={!this.props.binaryAPI.isValidated} autoComplete="off"/>Authorize now
                    </button>
                  </div>
                  <p className="card-text my-3">Or, you can add a token manually using this form.
                  You can create a token on the binary.com platform via the <strong>security & limitations</strong> under <strong>settings</strong> section in the binary platform.</p>
                  <form className="mt-3" onSubmit={this.handleAddToken}>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label" htmlFor="tokenInput">Token</label>
                      <div className="col-sm-10">
                        <input type="text" value={this.state.formInput} onChange={this.inputChangeHandler} className="form-control" id="tokenInput" aria-describedby="token help" placeholder="Enter token" />
                      </div>
                    </div>
                    <div className="form-group">
                      {this.state.formError ? 
                          <small id="token help" className="form-text text-danger mb-3">Invalid token!</small>
                        :
                          null
                      }
                      <button className="btn btn-info" type="submit">Add token</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-muted">
                  <small>*Authorize now is optional</small>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ListGroup tokens={this.props.binaryAPI.tokens}/>
              </div>
            </div>
          </div>
        );
    }else{
        return (
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col my-5 py-5">
                <WhisperSpinner
                          size={50}
                          color="#126246f"
                          loading={this.props.binaryAPI.isLoading}
                />
              </div>
            </div>
          </div>
        );
    }
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      binaryAPI: state.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
      loadTokens: () => dispatch(loadTokens()),
      validateToken: (token) => dispatch(validateToken(token)),
      addToken: (token) => dispatch(addToken(token)),
      alertZeroTokenError: (msg) => dispatch({
                                        type: SHOW_ERROR,
                                        payload: {
                                          msg: {
                                            invalidTokenError: "You have zero token available!"
                                          }
                                        }
                                      })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Integration);