import React from 'react'
import { useEffect, useRef } from 'react'
function Myprop(props) {
    const lastval = useRef(null);
    useEffect(() => {
        console.log(lastval.current);
        lastval.current = props.myprop
    })
    const previousProps = lastval.current;
    console.log(previousProps)
    return (
        <>
            <div>{previousProps}</div>
            <div>{props.myprop}</div>
        </>
    )
}

export default Myprop