import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const PredictionHistory = () => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="text-info">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Time</th>
          <th scope="col">Token</th>
          <th scope="col">Trade result</th>
          <th scope="col">Success rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>91%</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>79%</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>61%</td>
        </tr>
      </tbody>
    </table>
  )
}

const LoginHistory = (item) => {
  return (
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>61%</td>
    </tr>
  )
}

const History = (props) => {

  History.propTypes = {
    isValidated: propTypes.bool,
    history: propTypes.object,
    fetchLoginHistory: propTypes.func.isRequired
  }

  if (!props.history.isLoading && props.history.loginHistory.length === 0) {
    // display loading to the login history
    return (
      <div className="text-center">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">This is based on both the platforms binary.com and foxbinary</h4>
            <PredictionHistory />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-left">
              <div className="card-header">
                <h3>Login history</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">Your Binary.com login history</h5>
                <div className="card-text">
                <div className="text-info">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else if(props.history.loginHistory.length > 0){
    // diplay history 
    return (
      <div className="text-center">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">This is based on both the platforms binary.com and foxbinary</h4>
            <PredictionHistory />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-left">
              <div className="card-header">
                <h3>Login history</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">Your Binary.com login history</h5>
                <div className="card-text">
                  <LoginHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="text-center">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">This is based on both the platforms binary.com and foxbinary</h4>
            <PredictionHistory />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-left">
              <div className="card-header">
                <h3>Login history</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">Your Binary.com login history</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isValidated: state.webapi.isValidated,
    history: state.webapi.history,
  }
}

export default connect(mapStateToProps)(History);
