import React from 'react';
import MiniGraph from './MiniGraph/MiniGraph';
import AccountDetail from './AccountDetail/AccountDetail';
import ForexSnapshot from './ForexSnapshot';

const HeaderDashBoard = () => {
  return (
    <div className="row mb-3 mx-3 card-group">
        <div className="card m-3">
          <div className="card-header">
            <i className="material-icons text-info">swap_calls</i>
            <span>Quick overview</span>
          </div>
            <div className="card-body">
              <MiniGraph />
            </div>
        </div>
      <ForexSnapshot />
      <AccountDetail />
    </div>
  )

}

export default HeaderDashBoard;