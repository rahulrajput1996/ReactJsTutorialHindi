import React from 'react'
import { useParams } from 'react-router-dom'
function Countpage() {
    const { id } = useParams();
    return (
        <div>Countpage and id is {id}</div>
    )
}

export default Countpage