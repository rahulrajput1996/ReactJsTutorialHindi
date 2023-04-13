import React, { Component, createRef } from 'react'

//we should avoid to use createRef. it is used when we want to DOM manipulate directly
export default class Userefcomp extends Component {
    constructor() {
        super();
        this.myrefinput = createRef();
    }
    getdata() {
        console.log(this.myrefinput.current.value);
        this.myrefinput.current.style.backgroundColor = "red"
        this.myrefinput.current.style.color = "green"
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myrefinput} />
                <button onClick={() => this.getdata()}>getinput</button>
            </div>
        )
    }
}
