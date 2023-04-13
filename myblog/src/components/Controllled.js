import React, { useState } from 'react'

function Controllled() {
    const [data, setData] = useState("");
    const [data2, setData2] = useState("");

    //controlled component -----> get data by using only state
    const myclick = (e) => {
        e.preventDefault();
    }
    const mychange = (e) => {
        setData(e.target.value)
    }

    //uncontrolled component ---> get data by simple js or get data by using useRef
    const mychange2 = () => {
        setData2(document.getElementById("myinput").value)
    }
    const myclick2 = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form action="">
                <input type="text" defaultValue="10" onChange={mychange} />
                <button onClick={myclick}>get data</button>
            </form>
            <div>{data}</div>
            <form action="">
                <input type="text" id="myinput" onChange={mychange2} />
                <button onClick={myclick2}>get data</button>
            </form>
            <div>{data2}</div>
        </div>
    )
}

export default Controllled