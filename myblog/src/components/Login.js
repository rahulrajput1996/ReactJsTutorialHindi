import React from 'react'

function Login() {
    const mylogin = () => {
        localStorage.setItem("access_token", "ekdekjdkj")
    }
    return (
        <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button onClick={mylogin}>Login</button>
        </div>
    )
}

export default Login