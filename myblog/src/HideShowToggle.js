import React, { useState } from 'react'

function HideShowToggle() {
    const [data, setData] = useState(true);
    const hideData = () => {
        setData(false)
    }
    const showData = () => {
        setData(true)
    }
    const toggleData = () => {
        data ? setData(false) : setData(true)
    }
    return (
        <>
            <div>{data ? "SUMIT KUMAR" : null}</div>
            <button onClick={hideData}>Hide</button>
            <button onClick={showData}>Show</button>
            <button onClick={toggleData}>Toggle</button>
        </>
    )
}

export default HideShowToggle  