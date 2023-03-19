import React, { useState } from 'react'

function StateInFunctionComponent() {
    const [money, setMoney] = useState(0);
    const addMoney = () => {
        setMoney(money + 5);
    }
    return (
        <div>
            <h3>Money is {money}</h3>
            <button onClick={addMoney}>Add money</button>
        </div>
    )
}

export default StateInFunctionComponent