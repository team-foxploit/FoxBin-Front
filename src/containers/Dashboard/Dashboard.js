import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { getBlogs } from "../../store/actions/blogActions";
import { createMessage } from "../../store/actions/messageActions";

import Sidebar from "./Sidebar/BSidebar";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Account from "./Account/Account";

class Dashboard extends Component {
  state = {
    asset_index: null,
    symobl_names: null,
    url_slug: []
  };

  static propTypes = {
    posts: propTypes.array.isRequired,
    user: propTypes.object.isRequired,
    getBlogs: propTypes.func.isRequired
  };

  componentDidMount() {
    console.log(this.props);
    this.props.getBlogs();
    this.props.createMessage("LOL");
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
      <div className="wrapper">
        <Sidebar />
        <div className="container-fluid" id="content">
          <main role="main">
            <div className="col d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              {/* <Breadcrumb /> */}
              <div className="row">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-sm btn-info"
                >
                  <i className="material-icons">chevron_left</i>
                </button>
              </div>
            </div>
            <Switch>
              <Route path="/dashboard/account" component={Account} />
            </Switch>
          </main>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlogs:() => dispatch(getBlogs),
    createMessage: msg => dispatch(createMessage(msg))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
