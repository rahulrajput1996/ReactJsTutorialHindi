import React, { useState } from 'react';

function Form() {
    const [formdata, setFormdata] = useState({ title: "", password: "", country: "", gender: "", bike: "", car: "" });
    const mysubmit = (e) => {
        e.preventDefault()
        console.log(formdata);
    }
    const myChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
        // console.log(e.target.checked)
        // console.log(e)
    }
    return (
        <form action="" onSubmit={mysubmit}>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
                <input type="text" name="title" id="name1" placeholder='enter your name' onChange={myChange} minLength={5} required disabled={false} />
                <input type="password" name="password" id="password1" placeholder='enter your password' onChange={myChange} minLength={8} required />
                <select name="country" id="" onChange={myChange}>
                    <option value="noe">Select country</option>
                    <option value="ind">INDIA</option>
                    <option value="Aus">AUSTRALIA</option>
                    <option value="Jap">JAPAN</option>
                </select>
                <div>
                    <input type="radio" name="gender" id="maleid" value="male" onChange={myChange} />
                    <label htmlFor="maleid">MALE</label>
                    <input type="radio" name="gender" id="femaleid" value="female" onChange={myChange} />
                    <label htmlFor="femaleid">FEMALE</label>
                </div>
                <div>
                    <input type="checkbox" name="bike" id="bikeid" value="herohonda" onChange={myChange} />
                    <label htmlFor="bikeid">i have bike</label>
                    <input type="checkbox" name="car" id="carid" value="maruti" onChange={myChange} />
                    <label htmlFor="carid">i have car</label>
                </div>
                <button>Submit</button>
                <input type="reset" value="reset all" />
            </div>
        </form>

    )
}

export default Form