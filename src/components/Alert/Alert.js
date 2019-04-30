import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alert extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    console.log(this.props);
    if (error !== prevProps.error) {
      if (error.error.non_field_errors) {
        this.props.alert.error(error.error.non_field_errors);
      }
      if (error.error.formError) {
        this.props.alert.error(error.error.formError);
      }
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
    error: state.error,
    message: state.message.message
  };
};

export default connect(mapStateToProps)(withAlert()(Alert));
