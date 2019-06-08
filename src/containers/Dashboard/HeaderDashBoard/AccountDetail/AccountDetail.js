import React from 'react';
import { connect } from 'react-redux';
// import ItemList from './ItemList';

const AccountDetail = (props) => {
    console.log(props.userDetails);
    if(props.userDetails){
        return (
            <div className="card m-3">
                <div className="card-header">
                    <i className="material-icons text-info">account_circle</i>
                    <span className="text-primary">{props.userDetails.email}</span>
                </div>
                <div className="card-body p-0">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="text-success">Currency : {props.userDetails.currency}</span>
                            <span className="badge badge-primary badge-pill">Balance : {props.userDetails.balance}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Landing company : 
                            <span className="text-teal">{props.userDetails.landing_company_fullname}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Authorized access
                            {props.userDetails.scopes.map((scope, index) => {
                                return (
                                    <span key={index} className="badge badge-primary badge-pill">{scope}</span>
                                )
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }else{
        return (
            <div className="card m-3">
                <div className="card-header">
                    <i className="material-icons text-info">account_circle</i>
                    <span className="text-primary">Loading...</span>
                </div>
                <div className="card-body p-0">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="text-success">currency : Loading...</span>
                            <span className="badge badge-primary badge-pill">Balance : Loading...</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Landing company : 
                            <span className="text-teal">Loading...</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Authorized access
                            <span className="text-info">Loading...</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.webapi.userDetails
    }
}

export default connect(mapStateToProps)(AccountDetail);
