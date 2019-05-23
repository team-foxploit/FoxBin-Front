import React from "react";
import propTypes from "prop-types";
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const MiniGraph = (props) => {

    if(props.showSparkLine){
        return (
            <Sparklines data={props.sparkLineTicks}>
                <SparklinesLine style={{ fill: "none" }} />
                <SparklinesSpots />
            </Sparklines>
        );
    }else{
        return (
            <div>
                Loading...
            </div>
        )
    }
}

MiniGraph.propTypes = {
    sparkLineTicks : propTypes.array,
    showSparkLine : propTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        sparkLineTicks : state.tick.sparkLineTicks,
        showSparkLine : state.tick.showSparkLine
    }
}

export default connect(mapStateToProps)(MiniGraph);
