import React, { Component } from 'react';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {item: "AUD"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({item: event.target.value}, () => {
            console.log(this.state);
        });
    }

    render(){
        return (
            <form>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.value} onChange={this.handleChange}>
                            {Object.keys(this.props.items).map(function(key, index) {
                                return <option key={index} value={key}>{key}</option>;
                            })}
                        </select>
                    </div>
                    <div className="col-auto my-1 ml-4">
                        {this.props.items[this.state.item]}
                    </div>
                </div>
            </form>
        );
    }
}

export default ItemList;
