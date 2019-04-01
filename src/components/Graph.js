import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Graph extends Component {
  render() {
    // var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    // ws.onopen = function(evt) {
    //   ws.send(JSON.stringify({ ticks: "frxAUDJPY" }));
    // };

    // ws.onmessage = function(msg) {
    //   var data = JSON.parse(msg.data);
    //   console.log(data);
    // };

    const data = [
      [
        "Day",
        "Guardians of the Galaxy",
        "The Avengers",
        "Transformers: Age of Extinction"
      ],
      [1, 37.8, 80.8, 41.8],
      [2, 30.9, 69.5, 32.4],
      [3, 25.4, 57, 25.7],
      [4, 11.7, 18.8, 10.5],
      [5, 11.9, 17.6, 10.4],
      [6, 8.8, 13.6, 7.7],
      [7, 7.6, 12.3, 9.6],
      [8, 12.3, 29.2, 10.6],
      [9, 16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11, 5.3, 7.9, 4.7],
      [12, 6.6, 8.4, 5.2],
      [13, 4.8, 6.3, 3.6],
      [14, 4.2, 6.2, 3.4]
    ];
    return (
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          chart: {
            title: "Box Office Earnings in First Two Weeks of Opening",
            subtitle: "in millions of dollars (USD)"
          }
        }}
        rootProps={{ "data-testid": "3" }}
      />
    );
  }
}

export default Graph;
