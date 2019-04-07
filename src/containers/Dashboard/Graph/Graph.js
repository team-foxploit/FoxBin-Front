import React, { Component } from "react";
// Import fusioncharts.js files from fusioncharts module
import FusionCharts from "fusioncharts";
// Import the timeseries file from fusioncharts module
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
// Import ReactFusioncharts from react-fusioncharts module
// import ReactFC from 'react-fusioncharts';
import ReactFC from "react-fusioncharts";
import { getFormattedTime } from "./GraphFunctions";

// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = res => res.json();
// This is the remote url to fetch the data.
// const dataFetch = fetch(
//   "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
// ).then(jsonify);
// console.log(dataFetch);
// This is the remote url to fetch the schema.
// const schemaFetch = fetch(
//   'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
// ).then(jsonify);
const schemaFetch = [
  {
    name: "Time",
    type: "date",
    format: "%d-%b-%y"
  },
  {
    name: "Grocery Sales Value",
    type: "number"
  }
];

const getHistoryValues = () => {
  return new Promise((resolve, reject) => {
    var fullData = [];
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
    ws.onopen = evt => {
      ws.send(
        JSON.stringify({
          ticks_history: "frxEURUSD",
          end: "latest",
          start: 1,
          style: "ticks",
          adjust_start_time: 1,
          count: 200000000
        })
      );
    };

    ws.onmessage = msg => {
      var data = JSON.parse(msg.data);
      for (let index = 0; index < data.history.prices.length; index++) {
        fullData[index] = [
          getFormattedTime(data.history.times[index]),
          data.history.prices[index]
        ];
      }
      console.log("form asset data", fullData);
      resolve(fullData);
    };

    ws.onerror = error => {
      reject(error);
    };
  });
};

const dataFetch = getHistoryValues();

class Graph extends Component {
  constructor(props) {
    super(props);
    console.log(getFormattedTime(1554400204));
    getHistoryValues();
    this.state = {
      // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "600",
        height: "400",
        dataSource: {
          chart: {},
          caption: {
            text: "Sales Analysis"
          },
          subcaption: {
            text: "Grocery"
          },
          yAxis: [
            {
              plot: {
                value: "Grocery Sales Value"
              },
              format: {
                prefix: "$"
              },
              title: "Sale Value"
            }
          ]
          //  data: dataStore.createDataTable(data, schema)
        }
      }
    };

    /*
    {
      chart: {
          
      },
       caption: {
         text: 'Sales Analysis'
       },
       subcaption: {
         text: 'Grocery'
       },
       yAxis: [{
         plot: {
           value: 'Grocery Sales Value'
         },
         format: {
           prefix: '$'
         },
         title: 'Sale Value'
       }],
      //  data: dataStore.createDataTable(data, schema)
     }
     */

    // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema. Check the method definition to get more info.
    this.createDataTable = this.createDataTable.bind(this);
  }

  createDataTable() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      console.log(res[0]);
      console.log(res[1]);
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // After that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState(
        {
          timeseriesDs
        },
        () => {
          console.log(this.state.timeseriesDs);
        }
      );
    });
  }

  // We are creating the DataTable immidietly after the component is mounted
  componentDidMount() {
    this.createDataTable();
  }

  render() {
    return (
      <div className="App">
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

export default Graph;
