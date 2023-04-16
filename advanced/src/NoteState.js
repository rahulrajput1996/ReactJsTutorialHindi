import React, { useState } from 'react'
import noteContext from './NoteContext';

function NoteState(props) {
    const [data, setData] = useState({ name: "rahul", city: "bijnor" });
    const changedata = () => {
        setTimeout(() => {
            setData({ name: "ashish", city: "meerut" })
        }, 2000);
    }
    return (
        <noteContext.Provider value={{ data, changedata }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState