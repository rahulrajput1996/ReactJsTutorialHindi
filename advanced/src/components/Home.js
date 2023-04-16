import React from 'react'
import noteContext from '../NoteContext'
import { useContext, useEffect } from 'react'

function Home() {
    const abc = useContext(noteContext);
    useEffect(() => {
        abc.changedata()
    })
    return (
        <>
            <div>Home</div>
            <div>{abc.data.name}</div>
            <div>{abc.data.city}</div>
        </>
    )
}

export default Home