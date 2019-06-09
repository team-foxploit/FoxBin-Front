import React from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';

const ForexSnapshot = (props) => {
    if(props.exchangeRates.rates){
        return (
            <div className="card m-3">
                <div className="card-header">
                    <i className="material-icons text-info">assessment</i>
                    Forex Rates at a glance!
                </div>
                <div className="card-body">
                    <small>
                        <span className="text-center">
                            {props.exchangeRates.date}
                        </span>
                    </small>
                    <ItemList items={props.exchangeRates.rates}/>
                </div>
            </div>
        );
    }else {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <i className="material-icons text-info">assessment</i>
                    Forex Rates at a glance!
                </div>
                <div className="card-body">
                    <span className="text-secondary">Loading...</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrancy: state.tick.baseCurrancy,
        exchangeRates: state.tick.exchangeRates
    }
}

export default connect(mapStateToProps)(ForexSnapshot);
