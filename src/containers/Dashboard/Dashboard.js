import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { createMessage } from "../../store/actions/messageActions";

import Sidebar from "./Sidebar/Sidebar";
import IconSideBar from "./Sidebar/IconSideBar";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import Graph from "../../components/Graph/Graph";
// import GoogleGraph from "../../components/Graph/GoogleGraph";
// import Plot from "../../components/Plot/Plot";
import Account from "./Account/Account";
import HeaderBar from "./HeaderBar/HeaderBar";
import History from "./History/History";
import Integration from "./Integration/Integration";
import Main from "./Main/Main";
import HeaderDashBoard from "./HeaderDashBoard/HeaderDashBoard";

class Dashboard extends Component {
  state = {
    asset_index: null,
    symobl_names: null,
    url_slug: [],
    showSidebar: true
  };

  static propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
    activeToken: propTypes.string,
    user: propTypes.object.isRequired,
    createMessage: propTypes.func.isRequired
  };

  controlSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.activeToken.length > 0){

    }
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
            <HeaderDashBoard />
            {/* <button className="btn btn-primary" type="button" onClick={this.handleClick} >
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    <a href="https://oauth.binary.com/oauth2/authorize?app_id=16334">Login</a>
                </button> */}
            <Switch>
              <Route exact path="/dashboard" component={Main} />
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
    isAuthenticated: state.auth.isAuthenticated,
    activeToken: state.webapi.activeToken,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: msg => dispatch(createMessage(msg))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
