import React, { useRef } from 'react'

//we should avoid to use useRef. it is used when we want to DOM manipulate directly
function Usereffunctional() {
    const mypersonalref = useRef(null)
    const myclick = () => {
        console.log(mypersonalref.current);
        mypersonalref.current.style.color = "white";
        mypersonalref.current.style.backgroundColor = "black";
        mypersonalref.current.style.display = "none";
        mypersonalref.current.value = 10;
        mypersonalref.current.focus();
    }
    return (
        <div>
            <input type="text" ref={mypersonalref} />
            <button onClick={myclick}>Submit</button>
        </div>
    )
}

export default Usereffunctional