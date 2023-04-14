import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const mynavigation = useNavigate();
    const mybtn = (url) => {
        console.log(url)
        mynavigation(url)
    }
    return (
        <>
            <div>This is home page</div>
            <button onClick={() => { mybtn("/contact") }}>Go to contact</button>
            <button onClick={() => { mybtn("/about") }}>Go to About</button>
        </>
    )
}

export default Home