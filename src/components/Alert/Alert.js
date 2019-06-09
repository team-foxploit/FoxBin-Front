import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alert extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if(error.error){
        if (error.error.non_field_errors) {
          alert.error(error.error.non_field_errors);
        }
        if(error.error.invalidTokenError){
          alert.error(error.error.invalidTokenError);
        }
        if(error.error.inputValidationFailedError){
          alert.error(error.error.inputValidationFailedError);
        }
        if (error.error.formError) {
          alert.error(error.error.formError);
        }
      }
      
      /* TODO: Check for the first time
      * this is for the authentication details were not provided error.
      if (error.error.detail) {
         alert.error(error.error.detail);
      }*/
      
    }

    if (message !== prevProps.message) {
        if(message.tokenValidated){
          alert.success(message.tokenValidated);
        }
      // alert.success(message);
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
