import React from 'react'

function Logout() {
    const mylogout = () => {
        localStorage.removeItem("access_token");
    }
    return (
        <>
            <div>Logout</div>
            <button onClick={mylogout}>logout</button>
        </>
    )
}

export default Logout