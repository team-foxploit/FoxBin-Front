import React from "react";
import propTypes from "prop-types";

const ListItem = props => {
    var classes = null;
    if(props.active){
        classes = "list-group-item list-group-item-action active";
    }else{
        classes = "list-group-item list-group-item-action";
    }
  return (
    <li className={classes}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Token {props.id}</h5>
        <small>{new Date(props.time).toLocaleDateString() + " " +new Date(props.time).toLocaleTimeString()}</small>
      </div>
      {props.active ? (
        <React.Fragment>
          <p className="mb-1">
            Token ID : <span className="text-info">{props.token}</span>
          </p>
          <small className="text-danger">Active</small>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="mb-1">
            Token ID : <span className="text-info">{props.token}</span>
          </p>
          <small className="text-muted">Inactive</small>
        </React.Fragment>
      )}
    </li>
  );
};

ListItem.propTypes = {
    id: propTypes.number.isRequired,
    time: propTypes.string.isRequired,
    active: propTypes.bool.isRequired,
    token: propTypes.string.isRequired,
};

export default ListItem;
