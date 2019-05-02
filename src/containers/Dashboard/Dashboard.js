import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { getBlogs } from "../../store/actions/blogActions";
import { createMessage } from "../../store/actions/messageActions";

import Sidebar from "./Sidebar/Sidebar";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Account from "./Account/Account";
import HeaderBar from "./HeaderBar/HeaderBar";
import History from "./History/History";

class Dashboard extends Component {
  state = {
    asset_index: null,
    symobl_names: null,
    url_slug: [],
    showSidebar: true
  };

  static propTypes = {
    posts: propTypes.array.isRequired,
    user: propTypes.object.isRequired,
    getBlogs: propTypes.func.isRequired,
    createMessage: propTypes.func.isRequired
  };

  controlSidebar = () => {
    this.setState({
        showSidebar: !this.state.showSidebar
    }, () => {
        console.log(this.state.showSidebar);
    });
  }

  componentDidMount() {
    this.props.createMessage(`Welcome! ${this.props.user? this.props.user.username : null}`);
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
          <HeaderBar constrolSidebar={this.controlSidebar}/>
          <div className="row d-flex justify-content-between">
              {
                  this.state.showSidebar ?
                  <Sidebar />
                  :
                  null
              }
              <div className="col mt-4">
                  {/* <Breadcrumb /> */}
                  {/*<button
                      type="button"
                      id="sidebarCollapse"
                      className="btn btn-sm btn-info"
                      >
                      <i className="material-icons">chevron_left</i>
                      </button>*/}

                      <Switch>
                          <Route exact path="/dashboard/account" component={Account} />
                          <Route to="/history" component={History} />
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
