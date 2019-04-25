import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Item(props) {
  switch (props.slug) {
    case "dashboard":
      return <Link to={props.slug}>Dashboard</Link>;
    case "history":
      return <Link to={props.slug}>History</Link>;
    case "predictions":
      return <Link to={props.slug}>Predictions</Link>;
    case "automata":
      return <Link to={props.slug}>Automatations</Link>;
    case "integra":
      return <Link to={props.slug}>Integrations</Link>;
    case "account":
      return <Link to={props.slug}>Account Settings</Link>;
    case "login-his":
      return <Link to={props.slug}>Login History</Link>;
    default:
      return <Link to={props.slug}>{props.slug}</Link>;;
  }
}

Item.propTypes = {
  slug: propTypes.string
};

export default Item;
