import React from 'react'
import style from "../Header.module.css"
function Header() {
    console.log(style)
    return (
        <div className={style.primary}>Header</div>
    )
}

export default Header