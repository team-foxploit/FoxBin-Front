import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import propTypes from 'prop-types';

import { connect } from 'react-redux'
import { getBlogs } from '../../store/actions/blogActions';
import { createMessage } from '../../store/actions/messageActions';
// import { GET_BLOGS } from '../../store/actions/actionTypes';
// import style from "./Dashboard.module.css";
import Sidebar from "./Sidebar/BSidebar";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Account from './Account/Account';


class Dashboard extends Component {
  state = {
    asset_index: null,
    symobl_names: null,
    url_slug: []
  };


  static propTypes = {
    posts: propTypes.array.isRequired,
    getBlogs: propTypes.func.isRequired
  }

  componentDidMount() {
    console.log(this.props);
    // dispatch(createMessage("mounted!"));
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
    // {/* <div className="container-fluid">
    //   <div className={style.JumbotronMargin}>
    //     <div className="jumbotron">
    //       <h1 className="display-3">FoxBinary</h1>
    //       <p className="lead">
    //         Welcome to the Automated Trading Platform where you can trade Binary
    //         Options based on our predictions.
    //       </p>
    //       <hr className="my-4" />
    //       <div className="row no-gutters justify-content-md-center">
    //         <div className="col-md-4">
    //           <img src={BusinessChatImg} alt="business-chart"/>
    //         </div>
    //         <div className="card">
    //           <div className="card-body col-md-10" />
    //             {this.state.asset_index && this.state.active_symbols ? (
    //               <Form data={this.state} />
    //             ) : null}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
    // {/* <div className="container-fluid"> */}
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
                    class="btn btn-sm btn-info"
                  >
                    <i className="material-icons">chevron_left</i>
                  </button>
                </div>
              </div>
              {/* <Switch>
                {/* <Route exact path="/" component={Signin}/> */}
                {/* <Route path="/dashboard/account" component={Account}/> */}
                {/* <Route path="/about" component={About}/>
                <Route path="/:user" component={User}/>
                <Route component={NoMatch}/> */}
              {/* </Switch> */}
              {/* <Dashboard /> */}
              </main>
          </div>
          {/* </div> */}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.blogReducer.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: getBlogs,
    createMessage: (msg) => dispatch(createMessage(msg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);