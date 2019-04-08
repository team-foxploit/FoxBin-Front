import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { getFormattedTime } from '../containers/Dashboard/Graph/GraphFunctions';
import axios from 'axios';

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    console.log(this.props);
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class Graph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/5br7g9d6/";
  
  state = {
    data: [],
    count: 5
  }

  componentDidMount(){
    
    const subscribe = {
        ticks_history: 'R_50',
        end: 'latest',
        start: 1,
        style: 'ticks',
        subscribe: 1,
        adjust_start_time: 1,
        count: this.state.count
    };

    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      console.log(value);
      
      var prevData = this.state.data;
      if (value.msg_type === "history") {
        console.log("his");
        console.log(value.history.prices, value.history.times);
        for (let i = 0; i < this.state.count; i++) {
          const tempData = {
            time: getFormattedTime(value.history.times[i]),
            price: value.history.prices[i]
          }
          prevData.push(tempData);
        }
        this.setState({
          data: prevData
        },() => {
          console.log(this.state.data);
        });
      }else if(value.msg_type === 'tick'){
        console.log("now");
        const tempData = {
          time: getFormattedTime(value.tick.epoch),
          price: value.tick.quote
        }
        // var prevData = {...this.state.data};
        prevData.push(tempData);
        this.setState({
          data: prevData
        }, () => {
          console.log(this.state.data);           
        });
        // console.log(getFormattedTime(value.tick.epoch), value.tick.quote);        
      }
      

      /*
      axios.get('http://localhost:8000/api/tickhistory/')
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });      
      })
      .catch(err => {
        console.log(err);        
      })
      */
      // const oldBtcDataSet = this.state.data;
      // const newBtcDataSet = { ...oldBtcDataSet };
      // newBtcDataSet.data.push(value.price);

      // const newChartData = {
      //   ...this.state.data,
      //   datasets: [newBtcDataSet],
      //   labels: this.state.lineChartData.labels.concat(
      //     new Date().toLocaleTimeString()
      //   )
      // };
      // this.setState({ lineChartData: newChartData });
    };
  }

  render() {
    return (
      <LineChart
        width={1000}
        height={800}
        data={this.state.data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20
        }}
      >
        <XAxis dataKey="time" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip cursor={{ stroke: "red", strokeDasharray: "3 3" }} />
        <Legend />
        {/* <ReferenceLine x="Page C" stroke="red" strokeDasharray="3 3" />
        <ReferenceLine
          y={9800}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        /> */}
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
      </LineChart>
    );
  }
}
