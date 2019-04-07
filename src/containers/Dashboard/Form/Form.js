import React from "react";

const Form = props => {
  // var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
  // ws.onopen = evt => {
  //   ws.send(
  //     JSON.stringify({
  //       ticks: "frxEURUSD"
  //     })
  //   );
  // };

  // ws.onmessage = msg => {
  //   var data = JSON.parse(msg.data);
  //   console.log("form asset data", data.tick.quote);
  // };
  // if (props) {
  //   console.log(props.data);
  // }
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col">
            <select
              id="inputState"
              className="form-control"
              defaultValue={props.data.asset_index[0][0]}
            >
              {/* <option selected>{props.data.asset_index[0][1]}</option> */}
              {props.data.asset_index.map(index => (
                <option key={index[1]}>{index[1]}</option>
              ))}
            </select>
          </div>
          <div className="form-group col">
            <div className="btn-group">
              <button
                className="btn btn-secondary btn-lg dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Large button
              </button>
              <div className="dropdown-menu col-lg-6">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
                <div className="dropdown-divider" />
                <div className="px-4 py-3">
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleDropdownFormEmail1"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleDropdownFormPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
