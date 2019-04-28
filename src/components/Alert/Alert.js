import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alert extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    console.log(this.props);
    if (error !== prevProps.error) {
      alert.error("Error!");
      //   if(error.msg.tag){
      //     this.props.alert.error("Tag is required!");
      //   }
    }

    if (message !== prevProps.message) {
      //   if(message.loadTodos){
      //     this.props.alert.success(message.loadTodos);
      //   }
      alert.success(message);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.errorReducer,
    message: state.messageReducer.message
  };
};

export default connect(mapStateToProps)(withAlert()(Alert));
