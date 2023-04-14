import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='mynav'>
            <ul>
                <li>
                    <NavLink to="/" className="mylink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({ isActive }) => { return { color: isActive ? "black" : "yellow" } }}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="mylink">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/404" className="mylink">404</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="mylink">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="mylink">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/logout" className="mylink">Logout</NavLink>
                </li>
            </ul>
        </div >
    )
}

export default Navbar