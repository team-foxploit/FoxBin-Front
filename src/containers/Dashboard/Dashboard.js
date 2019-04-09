import React, { Component } from "react";
import Form from "./Form/Form";
import BusinessChatImg from '../../assets/business-chart.jpg';
import style from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    asset_index: null,
    symobl_names: null
  };

  componentDidMount() {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
    var asset_index = null;
    var active_symbols = null;
    ws.onopen = evt => {
      ws.send(
        JSON.stringify({
          asset_index: 1
        })
      );
      ws.send(
        JSON.stringify({
          active_symbols: "brief",
          product_type: "basic"
        })
      );
    };

    ws.onmessage = msg => {
      var data = JSON.parse(msg.data);
      console.log(data);
      if (data.asset_index) {
        asset_index = data.asset_index;
      }
      if (data.active_symbols) {
        active_symbols = data.active_symbols;
      }
      this.setState(
        {
          asset_index: asset_index,
          active_symbols: active_symbols
        },
        () => {
          console.log(this.state);
        }
      );
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className={style.JumbotronMargin}>
          <div className="jumbotron">
            <h1 className="display-3">FoxBinary</h1>
            <p className="lead">
              Welcome to the Automated Trading Platform where you can trade Binary
              Options based on our predictions.
            </p>
            <hr className="my-4" />
            <div className="row no-gutters justify-content-md-center">
              <div className="col-md-4">
                <img src={BusinessChatImg} alt="business-chart"/>
              </div>
              <div className="card">
                <div className="card-body col-md-10" />
                  {this.state.asset_index && this.state.active_symbols ? (
                    <Form data={this.state} />
                  ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
