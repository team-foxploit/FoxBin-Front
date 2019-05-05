import React, { Component } from "react";
import propTypes from "prop-types";

import { connect } from 'react-redux';
import { loadTokens, validateToken, addToken } from "../../../store/actions/tokenActions";

import ListGroup from '../../../components/ListGroup/ListGroup';

import { WhisperSpinner } from "react-spinners-kit";

class Integration extends Component {
    state = {
      showForm: false,
      formInput: "",
      formError: false,
      token: null
    }

    static propTypes = {
        isAuthenticated: propTypes.bool.isRequired,
        binaryAPI: propTypes.object.isRequired,
        loadTokens: propTypes.func.isRequired
    }

    componentDidMount(){
        if(this.props.isAuthenticated && !this.props.binaryAPI.isLoading){
            this.props.loadTokens();
        }
    }

    handleValidation = () => {
      const latestToken = this.props.binaryAPI.tokens[0].token;
      this.props.validateToken(latestToken);
    }

    handleDisplayForm = () => {
      this.setState({
        showForm: !this.state.showForm
      });
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
        this.setState({
          formError: false
        });
        this.props.addToken(token);
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
                    <label className="btn btn-primary" onClick={this.handleValidation}>
                      <input type="radio" name="options" id="option1"  disabled={this.props.binaryAPI.isValidated} autoComplete="on"/>validation check
                    </label>
                    <label className="btn btn-primary" onClick={this.handleDisplayForm}>
                      <input type="radio" name="options" id="option2" disabled={!this.props.binaryAPI.isValidated} autoComplete="off"/>Authorize now
                    </label>
                  </div>
                    <form className="mt-3" onSubmit={this.handleAddToken}>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="tokenInput">Token</label>
                        <div className="col-sm-10">
                          <input type="text" onChange={this.inputChangeHandler} className="form-control" id="tokenInput" aria-describedby="token help" placeholder="Enter token" />
                        </div>
                      </div>
                      <div className="form-group">
                        {this.state.formError ? 
                            <small className="form-text text-danger">Invalid token!</small>
                          :
                            <p id="token help" className="form-text text-muted">You can create a token manually via the security & limitations under settings section in the binary platform.</p>
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

export default connect(mapStateToProps, { loadTokens, validateToken, addToken })(Integration);