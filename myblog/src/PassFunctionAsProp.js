import React from 'react'

function PassFunctionAsProp(props) {
    return (
        <div>
            <button onClick={props.mydata}>Passed from Parent</button>
        </div>
    )
}

export default PassFunctionAsProp