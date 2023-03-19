import React from 'react'

function Twofunctioninsamefile() {
    function Insidefunc() {
        return (
            <div> i am inside func</div>
        )
    }
    return (
        <>
            <Insidefunc />
            {Insidefunc()}
            i am main function
            <Otherfunc />
        </>
    )
}

function Otherfunc() {
    return (
        <div>
            i am other function
        </div>
    )
}

export default Twofunctioninsamefile