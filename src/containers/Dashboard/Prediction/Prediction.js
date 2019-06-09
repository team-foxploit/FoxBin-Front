import React, { Component } from "react";
import propTypes from "prop-types";

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

import { WhisperSpinner } from "react-spinners-kit";

class Integration extends Component {

  state = {
      predicted_results: []
  }

  static propTypes = {
    // isAuthenticated: propTypes.bool.isRequired,
    // binaryAPI: propTypes.object.isRequired,
    // validateToken: propTypes.func.isRequired,
    // addToken: propTypes.func.isRequired,
    // alertZeroTokenError: propTypes.func.isRequired
  }

    componentDidMount(){
        
    }

    handlePredictionClick = (event) => {
        event.preventDefault();
        let ws = new WebSocket('ws://localhost:8000/ml/');
        console.log(ws);
        ws.onopen = (evt) => {
            console.log('Open');
            this.props.startPredict();
            ws.send(JSON.stringify({test: "Prediction"}));
        }

        ws.onmessage = (msg) => {
            const results = JSON.parse(msg.data);
            console.log('Message', results);
            this.setState({
                predicted_results: results
            }, () => {
                console.log(this.state);
            });
        }

        ws.onerror = (error) => {
            console.log('Error', error);
        }
    }

    render() {
        return (
            <div className="col">
                <div className="row mb-3">
                    <div className="col">
                        <div className="card text-left">
                            <div className="card-header">
                                <h4>Predictions</h4>
                            </div>
                            <div className="card-body">
                                <h4>Start your predictions...</h4>
                                <button className="btn btn-primary" onClick={this.handlePredictionClick}>
                                    Start
                                </button>
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      binaryAPI: state.webapi
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startPredict: () => dispatch({
            type: actionTypes.PREDICTION_START
        }),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Integration);