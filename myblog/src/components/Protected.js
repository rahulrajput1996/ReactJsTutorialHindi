import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("access_token") !== "ekdekjdkj") {
            navigate("/login")
        }
    })
    return (
        <>
            <div>{props.mycomp}</div>
        </>
    )
}

export default Protected