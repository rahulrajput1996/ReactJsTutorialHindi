import React from 'react'

//HighOrderComponenet are those which take a component as input and returns a component in output
function Highordercomponent(props) {
    return (
        <div>
            <h2>{props.mycmp}</h2>
        </div>
    )
}

export default Highordercomponent