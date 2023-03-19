import React, { useState } from 'react';

function PropsInFunctional(props) {
    // console.log(props)
    const [mydetails, setMydetails] = useState(props.mydata1);
    const myfun = () => {
        setMydetails("harshit");
    }
    return (
        <div>
            <h4>{mydetails}</h4>
            <button onClick={myfun}>click me</button>
            <div>{props.mydata1}</div>
            <div>{props.mydata2.address}</div>
            <div>{props.mydata2.pincode}</div>
            <div>{props.mydata3.props.children}</div>
        </div>
    )
}

export default PropsInFunctional