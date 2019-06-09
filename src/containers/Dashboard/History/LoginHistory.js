import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import EnvItem from './EnvItem';

const LoginHistory = (props) => {
    console.log(props);
    if(props.history.isLoading){
        return (
            <div className="text-info">
                Loading...
            </div>
        )
    }
    if(props.history.loginHistory.length === 0){
        return (
            <div className="text-danger">
                Something went wrong, please reload later.
            </div>
        )
    }else{
        return (
            <table className="table table-bordered table-hover">
                <thead className="text-info">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                    <th scope="col">Date & Time</th>
                    <th scope="col">IP Address</th>
                    <th scope="col">Browser Environment</th>
                    </tr>
                </thead>
                <tbody>
                    {props.history.loginHistory.map((historyItem, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{historyItem.action}</td>
                                <td>{historyItem.environment.split("IP=")[0]}</td>
                                <td>{historyItem.environment.split("IP=")[1].split(" ")[0]}</td>
                                <EnvItem env={historyItem.environment}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

LoginHistory.propTypes = {
    isLoading: propTypes.bool.isRequired,
    isValidating: propTypes.bool.isRequired,
    isValidated: propTypes.bool.isRequired,
    history: propTypes.object
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.webapi.isLoading,
        isValidating: state.webapi.isValidating,
        isValidated: state.webapi.isValidated,
        history: state.webapi.history
    }
}

export default connect(mapStateToProps)(LoginHistory);