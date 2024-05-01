import React, {Component} from "react";

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    increment = () => {
        this.setState((prevState) => ({count: prevState.count +1}));
    };

    decrement = () => {
        this.setState((prevState) => ({count: prevState.count -1}));
    };

    render(){
        return (
            <div>
                <div>
                    <h1>Counter App</h1>
                </ div>
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        );
    }

}