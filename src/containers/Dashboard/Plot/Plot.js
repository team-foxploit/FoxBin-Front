import React, { Component } from "react";
import Plot from "react-plotly.js";
import { getFormattedTime } from '../Graph/GraphFunctions';

class PlotApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: [
            '06-Apr-2019 22:46:42',
            '06-Apr-2019 22:46:44',
            '06-Apr-2019 22:46:46'
          ],
          y: [
            273.4472,
            273.4704,
            273.4816
          ],
          type: "line",
          mode: "lines+markers",
          marker: {
              color: "red"
            }
        }
      ],
      layout: {
        width: 620,
        height: 540,
        title: "Trading values for USD/AUD"
      },
      frames: [],
      config: {}
    };
  }

  componentDidMount(){
    
    const subscribe = {
        ticks_history: 'R_50',
        end: 'latest',
        start: 1,
        style: 'ticks',
        subscribe: 1,
        adjust_start_time: 1,
        count: 5
    };

    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      console.log(value);
      
      var prevData = this.state.data[0];
      if (value.msg_type === "history") {
        console.log("his");
        console.log(value.history.prices, value.history.times);
        for (let i = 0; i < this.state.count; i++) {
        //   const tempData = {
        //     time: getFormattedTime(value.history.times[i]),
        //     price: value.history.prices[i]
        //   }
          prevData.x.push(getFormattedTime(value.history.times[i]));
          prevData.y.push(value.history.prices[i]);
        }
        console.log(prevData);        
        // this.setState({
        //   data: prevData
        // },() => {
        //   console.log(this.state.data);
        // });
      }else if(value.msg_type === 'tick'){
        console.log("now");
        // const tempData = {
        //   time: getFormattedTime(value.tick.epoch),
        //   price: value.tick.quote
        // }
        // var prevData = {...this.state.data};
        prevData.x.push(getFormattedTime(value.tick.epoch));
        prevData.y.push(value.tick.quote);
        // this.setState({
        //   data: prevData
        // }, () => {
        //   console.log(this.state.data);           
        // });
        console.log(prevData);        
        // console.log(getFormattedTime(value.tick.epoch), value.tick.quote);        
      }
      
    };
  }

  render() {
    return <Plot data={this.state.data} layout={this.state.layout} />;
  }
}

export default PlotApp;
