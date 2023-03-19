import React, { Component } from 'react'

export default class PropsInClass extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.mydetail1}</h5>
            </div>
        )
    }
}
