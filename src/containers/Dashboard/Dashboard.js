import React, { Component } from "react";
import Form from "./Form/Form";

class Dashboard extends Component {
  state = {
    asset_index: null
  };

  componentDidMount() {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
    ws.onopen = evt => {
      ws.send(
        JSON.stringify({
          asset_index: 1
        })
      );
    };

    ws.onmessage = msg => {
      var data = JSON.parse(msg.data);
      console.log(data);
      this.setState(
        {
          asset_index: data.asset_index
        },
        () => {
          console.log(this.state);
        }
      );
    };
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <div className="card">
            <div className="card-body" />
            {this.state.asset_index ? (
              <Form asset_index={this.state.asset_index} />
            ) : null}
          </div>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
