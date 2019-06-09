import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

import { connect } from "react-redux";
import { tickStream } from "../../store/actions/tickActions";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        chart: {
          id: 'realtime',
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
            autoSelected: 'zoom'
          }
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
      data: nextProps.tick.ticks.componentTicks
    }], true, true);
  }
  
  render() {
    return (
      <div className="card m-1">
        <div className="card-header">
          <h4 className="card-title">
            Real-time Graph
          </h4>
        </div>
        <div className="card-body">
            {this.props.tick.market ?
            <>
              <h3 className="card-title">{this.props.tick.market.display_name} Graph</h3>
            </>
              :
            <div className="col-md-12 m-3">
              <span className="text-teal">Loading...</span>
            </div>
            }
          <div className="col-md-12 mixed-chart">
            <Chart
              options={this.state.chartOptions}
              series={this.state.chartSeries}
              type="line"
            />
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

export default connect(mapStateToProps, { tickStream })(Graph);
