import React, { Component, Fragment } from "react";

import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alert extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    console.log(this.props);
    if (error !== prevProps.error) {
      console.log(error);
      this.props.alert.error("Error!");
      //   if(error.error){
      //     this.props.alert.error("Network Error!");
      //   }
      //   if(error.msg.tag){
      //     this.props.alert.error("Tag is required!");
      //   }
      //   if(error.msg.title){
      //     if(error.msg.title[0] === "This field may not be blank."){
      //       this.props.alert.error("Title is required!");
      //     }else{
      //       this.props.alert.error(error.msg.title[0]);
      //     }
      //   }
    }

    if (message !== prevProps.message) {
      //   if(message.loadTodos){
      //     this.props.alert.success(message.loadTodos);
      //   }else if(message.addTodo){
      //     this.props.alert.success(message.addTodo);
      //   }else if(message.deleteTodo){
      //     this.props.alert.success(message.deleteTodo);
      //   }
      this.props.alert.success(message);
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
