import React from 'react'

function Clickevent() {
    function myalert() {
        return (
            alert("i have an alert message")
        )
    }
    return (
        <div>
            <button onClick={myalert}>Click me</button>
            {/* <button onClick={myalert()}>Click me</button> */}
            {/* <button onClick={alert("i have an alert message bye")}>Click me</button> */}
            <button onClick={() => { alert("i have an alert message bye") }}>Click me</button>
        </div>
    )
}

export default Clickevent