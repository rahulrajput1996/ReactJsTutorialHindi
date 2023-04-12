import React, { PureComponent } from 'react'

export default class Purecomponent extends PureComponent {
    constructor(params) {
        console.log("rendering");
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.log("hello")
        return (
            <div>
                <h1>hello render and count is {this.state.count}</h1>
                <button onClick={() => {
                    this.setState(
                        { count: this.state.count + 0 }
                    )
                }}>change count</button>
            </div >
        )
    }
}
