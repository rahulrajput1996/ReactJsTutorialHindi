import React, { useState, useEffect } from 'react'

function ApplyuseEffect(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("i will run only first time")
    }, [])
    useEffect(() => {
        console.log("i will run on any state change")
    })
    useEffect(() => {
        console.log("i will run only count state change")
    }, [count])
    useEffect(() => {
        console.log("i will run only data state change")
    }, [props.mydata])
    return (
        <>
            <div>ApplyuseEffect---- count is {count}</div>
            <div>data is {props.mydata}</div>
            <button onClick={() => { setCount(count + 1) }}>change count</button>
        </>
    )
}

export default ApplyuseEffect