import React from 'react';
import MiniGraph from '../../../components/MiniGraph/MiniGraph';
import ForexSnapshot from './ForexSnapshot';

const HeaderDashBoard = () => {
  return (
    <div className="row mb-3">
      <div className="col-md-4">
          <div className="card m-3 p-0">
            <div className="card-header">
              Quick overview
            </div>
              <div className="card-body">
                <MiniGraph />
              </div>
          </div>
      </div>
      <ForexSnapshot />
      <div className="col-md-4">
          <div className="card m-3 p-0">
            <div className="card-header">
              Quick overview
            </div>
              <div className="card-body">
                <MiniGraph />
              </div>
          </div>
      </div>
    </div>
  )

}

export default HeaderDashBoard;