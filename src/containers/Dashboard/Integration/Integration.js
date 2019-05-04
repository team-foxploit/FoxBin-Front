import React, { Component } from "react";
import propTypes from "prop-types";

import { connect } from 'react-redux';
import { loadTokens } from "../../../store/actions/tokenActions";

import ListGroup from '../../../components/ListGroup/ListGroup';

class Integration extends Component {

    static propTypes = {
        isAuthenticated: propTypes.bool.isRequired,
        isLoading: propTypes.bool.isRequired,
        isLoaded: propTypes.bool.isRequired,
        tokens: propTypes.array.isRequired,
        loadTokens: propTypes.func.isRequired
    }

    componentDidMount(){
        if(this.props.isAuthenticated && !this.props.isLoaded){
            this.props.loadTokens();
        }
    }

  render() {
    if (this.props.isLoaded) {
        return <ListGroup tokens={this.props.tokens}/>
    }else{
        return<h1>Loading.............</h1>
    }
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isLoading: state.token.isLoading,
      isLoaded: state.token.isLoaded,
      tokens: state.token.tokens
    };
  };

export default connect(mapStateToProps, { loadTokens })(Integration);