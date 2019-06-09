import React, { Component } from "react";
import propTypes from "prop-types";
import Graph from "../../../components/Graph/Graph";
import { getFormattedTime } from "../../../components/Graph/GraphFunctions";

import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

import { WhisperSpinner } from "react-spinners-kit";

class Integration extends Component {

  state = {
      predicted_results: [],
      isStarted: false,
      isPredicted: false,
      isLoading: false,
      chartOptions: {
        chart: {
          id: 'predictionGraph',
          width: 100,
          height: 100,
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            dynamicAnimation: {
              enabled: true,
              speed: 500
            },
            animateGradually: {
              enabled: true,
              delay: 150
          },
          },
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          line: {
            lineWidth: "1",
            endingShape: "arrow"
          }
        },
        title: {
          text: 'Predictions for Volatility Indices',
          align: 'left'
        },
        markers: {
          size: 0,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 5
          }
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            show: true
          },
          title: {
            text: 'Time',
          },
        },
        yaxis: {
            seriesName: 'Volatility Indices Predicted',
            labels: {
                offsetX: 2,
                offsetY: 0
            },
            title: {
                text: 'Volatility Indices',
                align: 'left'
            },
            axisBorder: {
                show: true,
                color: '#00E396'
            },
            tooltip: {
                enabled: true
            }
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      chartSeries: [
        {
          name: "Volatility Indices Predicted",
          type: "line",
          data: []
        }
      ]
  }

  static propTypes = {
    // isAuthenticated: propTypes.bool.isRequired,
    // binaryAPI: propTypes.object.isRequired,
    // validateToken: propTypes.func.isRequired,
    // addToken: propTypes.func.isRequired,
    // alertZeroTokenError: propTypes.func.isRequired
  }

    handlePredictionClick = (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true,
            isStarted: true
        }, () => {
            console.log(this.state);
        });
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
            let data = [];
            let startTime = new Date().getTime();
            this.props.showRealTimeGraph();
            let i = 0;
            results.forEach(element => {
                const tempVal = {
                    x: getFormattedTime(parseInt((startTime/1000 + i))),
                    y: element
                }
                data.push(tempVal);
                i = i + 2;
            });
            console.log(data);
            this.setState({
                predicted_results: data,
                isLoading: false,
                isPredicted: true,
                isStarted: false
            }, () => {
                ApexCharts.exec('predictionGraph', 'updateSeries', [{
                    data: data
                }], true, true);
            });
        }

        ws.onerror = (error) => {
            console.log('Error', error);
        }
    }

    componentWillUnmount(){
        console.log('kdcv');
        this.props.unShowRealTimeGraph();
    }

    render() {
        return (
            <div className="col">
                <div className="row mb-3">
                    <div className="col-md-12">

                        <div className="card text-left">
                            <div className="card-header">
                                <h3>Predictions</h3>
                            </div>
                            <div className="card-body">
                                <h4>Start your predictions...</h4>
                                <button className="btn btn-primary" onClick={this.handlePredictionClick}>
                                    Start
                                </button>
                                {this.state.isLoading ? 
                                    <div className="col my-5 py-5 d-flex justify-content-center">
                                        <WhisperSpinner
                                                size={50}
                                                color="#126246f"
                                                loading={!this.state.isLoaded}
                                        />
                                    </div>
                                    :
                                    null
                                }
                                <div className="row m-3 card-group">
                                    {this.state.isPredicted ?
                                            <div className="card m-1">
                                                <div className="card-header">
                                                    <h4>Prediction Graph</h4>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-md-12 mixed-chart">
                                                        <Chart
                                                            options={this.state.chartOptions}
                                                            series={this.state.chartSeries}
                                                            type="line"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                        null
                                    }
                                    {this.state.isPredicted ?
                                        <Graph />
                                        :
                                        null
                                    }
                                </div>
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
      binaryAPI: state.webapi,
      tick: state.tick
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startPredict: () => dispatch({
            type: actionTypes.PREDICTION_START
        }),
        showRealTimeGraph: () => dispatch({
            type: actionTypes.COMPONENT_TICK_UPDATE_START
        }),
        unShowRealTimeGraph: () => dispatch({
            type: actionTypes.COMPONENT_TICK_UPDATE_STOP
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Integration);