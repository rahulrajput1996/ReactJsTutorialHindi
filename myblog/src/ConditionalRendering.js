import React, { useState } from 'react';

function ConditionalRendering() {
    const [data, setData] = useState(3);
    const accessData = () => {
        data === 1 ? setData(2) : data === 2 ? setData(3) : setData(1);
    }
    // const data = 1;
    return (
        <div>
            {data === 1 ? <h6>welcome to admin</h6> :
                data === 2 ? <h6>welcome to guest</h6> :
                    <h6>welcome to hacker</h6>}
            <button onClick={accessData}>who has access</button>
        </div>
    )
}

export default ConditionalRendering