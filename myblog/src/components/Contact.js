import React, { useState } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
function Contact() {
    const [count, setcount] = useState(0);
    const myclick = () => {
        setcount(count + 5)
    }
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
    return (
        <>
            <div>This is contact us page</div>
            <button onClick={myclick}>change Count</button>
            <NavLink to={`/contact/${count}`}>Go to {count}</NavLink>
            <NavLink to={`/contact/?count=${count}`} state={{ name: "rajput", address: "asgarpur" }}>search to {count}</NavLink>
            <div>Search params are {searchParams.get("count")}</div>
            <button onClick={() => { setSearchParams({ age: 40, name: "rahul" }) }}>set age and name params</button>
        </>
    )
}

export default Contact