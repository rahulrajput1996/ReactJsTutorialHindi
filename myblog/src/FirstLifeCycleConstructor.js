import React, { Component } from 'react'

export default class FirstLifeCycleConstructor extends Component {
    constructor() {
        super();
        console.log("hello world");
        this.state = {
            data: 0
        }
    }
    componentDidMount() {
        console.log("in end");
    };
    componentDidUpdate(preprops, prestate, snapshot) {
        console.log("runs")
        console.log(preprops, prestate, snapshot)
    }
    shouldComponentUpdate() {
        console.log("stopped");
        console.log(this.state.data)
        if (this.state.data > 10) {
            return true;
        }
    }
    componentWillUnmount() {
        console.log("component is removed from dom")
    }
    render() {
        console.log("bye")
        console.log(this.props)
        return (
            <div>
                hello {this.state.data} {this.props.mydata}
                <button onClick={() => { this.setState({ data: this.state.data + 1 }) }}>click here</button>
                hello
            </div>

        )
    }
}
