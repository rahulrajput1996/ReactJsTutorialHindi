import React, { Component } from 'react'

export default class StateInClassComponent extends Component {
    constructor() {
        super();
        this.state = { price: 0 };
    }
    addPrice() {
        this.setState({ price: this.state.price + 1 })
    }
    render() {
        return (
            <>
                <h3>Price is {this.state.price}</h3>
                <button onClick={() => { this.addPrice() }}>Add Price</button>
            </>
        )
    }
}
