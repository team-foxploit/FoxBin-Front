import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

import { connect } from "react-redux";
import { tickStream } from "../../../store/actions/tickActions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        chart: {
          id: 'realtime',
          width: "100%",
          height: 380,
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
            autoSelected: 'zoom'
          },
          // toolbar: {
          //   show: true
          // }
        },
        plotOptions: {
          line: {
            lineWidth: "1",
            endingShape: "arrow"
          }
        },
        title: {
          text: 'Stock Price Movement',
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
          // range: 777600000,
        },
        yaxis: {
          labels: {
            offsetX: 2,
            offsetY: 0
          },
          title: {
            text: 'Volatility Indices',
            align: 'left'
          },
          axisBorder: {
            show: true
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
          name: "Current rate",
          type: "line",
          data: []
        }
      ]
    };
  }

  componentWillReceiveProps(nextProps){
    ApexCharts.exec('realtime', 'updateSeries', [{
      data: nextProps.tick.globalTicks
    }], true, true);
  }
  
  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Forex rate graph</h3>
              </div>
              <div className="card-body">
                <div className="col-md-12 m-3">
                  {this.props.tick.market ?
                    <div>
                      <h5>Market: <span className="text-success">{this.props.tick.market.display_name}</span></h5>
                      <p>Market display name: <span className="text-secondary">{this.props.tick.market.market_display_name}</span></p>
                    </div>
                    :
                    <span className="text-teal">Loading...</span>
                  }
                </div>
                <div className="col-md-12 mixed-chart">
                  <Chart
                    options={this.state.chartOptions}
                    series={this.state.chartSeries}
                    type="line"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Predict now</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <form className="form-inline col">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Your bid preference</label>
                    <select className="custom-select my-3 px-3 py-3 mx-3" id="inlineFormCustomSelectPref">
                      <option value="1">Rise</option>
                      <option value="2">Fall</option>
                    </select>

                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                      <input type="checkbox" className="custom-control-input" id="customControlInline" />
                      <label className="custom-control-label" htmlFor="customControlInline">Remember my preference</label>
                    </div>

                    <NavLink to="dashboard/predictions"><button type="submit" className="btn btn-primary my-1">Submit</button></NavLink>
                  </form>
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
    tick: state.tick
  }
}

export default connect(mapStateToProps, { tickStream })(Main);
