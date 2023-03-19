import React, { useState } from 'react';

function GetInputBox() {
    const [name, setname] = useState(null);
    const [displayname, setdisplayname] = useState(null);
    const myChange = (e) => {
        setname(e.target.value);
        setdisplayname(null)
    }
    const GetInputValue = () => {
        setdisplayname(name);
    }
    return (
        <div>
            <h5>{name}</h5>
            <h5>{displayname}</h5>
            <input type="text" onChange={myChange} placeholder='enter your name' />
            <button onClick={GetInputValue}>PrintDATA</button>
        </div>
    )
}

export default GetInputBox