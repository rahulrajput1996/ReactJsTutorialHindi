import React from 'react'

function Senddatafromchildtoparent(props) {
    return (
        <div>
            <span>sending...</span>
            <button onClick={() => { props.myfun(3) }}>send</button>
        </div>
    )
}

export default Senddatafromchildtoparent