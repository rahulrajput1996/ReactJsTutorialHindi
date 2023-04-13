import React, { forwardRef } from 'react'

//usage of forward ref
function Forwardrefcomp(props, myref2) {
    return (
        <div>
            <input type="text" ref={myref2} />
        </div>
    )
}

export default forwardRef(Forwardrefcomp)