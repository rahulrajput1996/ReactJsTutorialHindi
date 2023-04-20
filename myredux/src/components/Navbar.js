import React from 'react'
import { useSelector } from 'react-redux';

function Navbar() {
    const data = useSelector((state) => {
        return state.amount
    })
    return (
        <div>
            amount is {data}
        </div>
    )
}

export default Navbar