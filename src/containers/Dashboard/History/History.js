import React from 'react';
import PredictionHistory from './PredictionHistory';
import LoginHistory from './LoginHistory';

const History = (props) => {

  return (
    <div className="col text-center">
      <div className="row">
        <div className="col">
          <h4 className="mb-4">This is based on both the platforms binary.com and foxbinary</h4>
          <div className="card text-left">
            <div className="card-header">
              <h3>Prediction History</h3>
            </div>
            <div className="card-body">
              <PredictionHistory />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="card text-left">
            <div className="card-header">
              <h3>Login history</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">Your Binary.com login history</h5>
              <LoginHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History;
