import React, { Component } from "react";
import Plot from "react-plotly.js";
import { getFormattedTime } from "../Graph/GraphFunctions";

class PlotApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: "EUR/USD",
      data: [
        {
          x: [],
          y: [],
          type: "line",
          mode: "lines+markers",
          marker: {
            color: "#ab63fa"
          }
        }
      ],
      layout: {
        autosize: true,
        title: "Forex chart : EUR/USD",
        datarevision: 0
      },
      frames: [],
      config: {},
      revision: 0
    };
  }

  componentDidMount() {
    const subscribe = {
      ticks_history: "R_50",
      end: "latest",
      start: 1,
      style: "ticks",
      subscribe: 1,
      adjust_start_time: 1,
      count: 5
    };
    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
      console.log("jdvd");
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      console.log(value);
      var prevData = this.state.data[0];
      var prevLayout = this.state.layout;
      if (value.msg_type === "history") {
        console.log(value);
        console.log(value.history.prices, value.history.times);
        for (let i = 0; i < this.state.count; i++) {
          prevData.x.push(getFormattedTime(value.history.times[i]));
          prevData.y.push(value.history.prices[i]);
        }
        this.setState(
          {
            data: [prevData],
            revision: this.state.revision + 1,
            layout: {
              ...this.state.layout,
              datarevision: prevLayout.datarevision + 1
            }
          },
          () => {
            console.log(this.state);
          }
        );
      } else if (value.msg_type === "tick") {
        console.log(value);
        prevData.x.push(getFormattedTime(value.tick.epoch));
        prevData.y.push(value.tick.quote);
        this.setState(
          {
            data: [prevData],
            revision: this.state.revision + 1,
            layout: {
              ...this.state.layout,
              datarevision: prevLayout.datarevision + 1
            }
          },
          () => {
            console.log(this.state);
          }
        );
      }
    };
  }

  render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        revision={this.state.revision}
        useResizeHandler={true}
      />
    );
  }
}

export default PlotApp;
