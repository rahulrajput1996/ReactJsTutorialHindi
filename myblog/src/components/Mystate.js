import React, { useState } from 'react'
import Myprop from './Myprop';

function Mystate() {
    const [count, setcount] = useState(1);
    const mystatechange = () => {
        // setcount((pre) => {
        //     console.log(pre)
        //     return pre * 2
        // })
        // for (let index = 0; index < 5; index++) {
        //     setcount(count + 1);
        // }
        for (let index = 0; index < 5; index++) {
            setcount((pre) => {
                // console.log(pre)
                return pre + 1
            })
        }
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={mystatechange}>click</button>
            <Myprop myprop={count} />
        </>
    )
}

export default Mystate