import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function About() {
    return (
        <>
            <div>This is about page</div>
            <NavLink to="company" className="mylink">company</NavLink>
            <NavLink to="youtube" className="mylink">youtube</NavLink>
            <Outlet />
        </>
    )
}

export default About