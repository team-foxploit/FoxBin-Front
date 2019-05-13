import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

class MiniGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: []
        };
    }

    componentWillMount(){
        const subscribe = {
            ticks_history: "R_50",
            end: "latest",
            start: 1,
            style: "ticks",
            subscribe: 1,
            adjust_start_time: 1,
            count: 100
        };
        this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");
        this.ws.onopen = () => {
            this.ws.send(JSON.stringify(subscribe));
        };
    }

    componentDidMount() {
        console.log(this.ws, this.state);
        this.ws.onmessage = e => {
            const value = JSON.parse(e.data);
            var prevData = this.state.data;
            if (value.msg_type === "history") {
                for (let i = 0; i < value.history.prices.length; i++) {
                    prevData.push(value.history.prices[i]);
                }
                this.setState({
                    data: prevData
                },() => {
                    console.log(this.state);
                });
            } else if (value.msg_type === "tick") {
                prevData.push(value.tick.quote);
                this.setState({
                    data: prevData
                },() => {
                    console.log(this.state);
                });
            }
        };
    }
    render() {
        return (
        <Sparklines data={this.state.data}>
            <SparklinesLine style={{ fill: "none" }} />
            <SparklinesSpots />
        </Sparklines>
        );
    }
}

export default MiniGraph;
