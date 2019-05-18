import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLoginHistory } from '../../../store/actions/webapiActions';

class History extends Component {

    componentWillReceiveProps(nextProps){
      if(nextProps.activeToken){
        nextProps.fetchLoginHistory();
      }
    }

    render(){
      return (
        <div className="text-center">
            <h4 className="mb-4">This is based on both the platforms binary.com and foxbinary</h4>
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

        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    activeToken: state.webapi.activeToken
  }
}

export default connect(mapStateToProps, { fetchLoginHistory })(History);
