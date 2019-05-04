import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { loadUser } from "../../store/actions/authActions";
import { createMessage } from "../../store/actions/messageActions";

import Sidebar from "./Sidebar/Sidebar";
import IconSideBar from "./Sidebar/IconSideBar";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Account from "./Account/Account";
import HeaderBar from "./HeaderBar/HeaderBar";
import History from "./History/History";
import Integration from "./Integration/Integration";

class Dashboard extends Component {
  state = {
    asset_index: null,
    symobl_names: null,
    url_slug: [],
    showSidebar: true
  };

  static propTypes = {
    posts: propTypes.array.isRequired,
    isAuthenticated: propTypes.bool.isRequired,
    user: propTypes.object.isRequired,
    loadUser: propTypes.func.isRequired,
    createMessage: propTypes.func.isRequired
  };

  controlSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  };

  componentDidMount() {
    /*
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
    */
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.isAuthenticated ? (
          <HeaderBar constrolSidebar={this.controlSidebar} />
        ) : null}
        <div className="row d-flex justify-content-between">
          {this.state.showSidebar ? <Sidebar /> : <IconSideBar />}
          <div
            className="col mt-4"
            style={{ minWidth: "298px", minHeight: "480px" }}
          >
            {/* <Breadcrumb /> */}
            {/* <button className="btn btn-primary" type="button" onClick={this.handleClick} >
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    <a href="https://oauth.binary.com/oauth2/authorize?app_id=16334">Login</a>
                </button> */}
            <Switch>
              <Route exact path="/dashboard/account" component={Account} />
              <Route exact path="/dashboard/history" component={History} />
              <Route exact path="/dashboard/integra" component={Integration} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser),
    createMessage: msg => dispatch(createMessage(msg))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
