import React from 'react';
import { connect } from 'react-redux';

const HeaderDashBoard = () => {
  return (
    <div>
      
    </div>
  )

}

const mapStateToProps = (state) => {
    return {
        data: state.tick.globalTicks
    }
}

export default connect(mapStateToProps)(HeaderDashBoard);