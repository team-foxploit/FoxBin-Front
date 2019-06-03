import React from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';

const ForexSnapshot = (props) => {
    if(props.exchangeRates.isLoading){
        return (
            <div className="col-md-4">
                <div className="card m-3 p-0">
                    <div className="card-header">
                        Forex Rates at a glance!
                    </div>
                    <div className="card-body">
                        Please wait...
                    </div>
                </div>
            </div>
        );
    }else if(props.exchangeRates.rates){
        return (
            <div className="col-md-4">
                <div className="card m-3 p-0">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                Forex Rates at a glance!
                            </div>
                            <div className="col">
                                [*Base currancy: {props.baseCurrancy}]
                            </div>
                        </div>
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
            </div>
        );
    }else {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrancy: state.tick.baseCurrancy,
        exchangeRates: state.tick.exchangeRates
    }
}

export default connect(mapStateToProps)(ForexSnapshot);
