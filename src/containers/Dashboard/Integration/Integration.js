import React, { Component } from "react";
import PropTypes from "prop-types";

class Integration extends Component {
  render() {
    return (
      <div className="list-group">
        <li className="list-group-item list-group-item-action active">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small>Donec id elit non mi porta.</small>
        </li>
        <li className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </li>
        <li className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </li>
      </div>
    );
  }
}

export default Integration;
