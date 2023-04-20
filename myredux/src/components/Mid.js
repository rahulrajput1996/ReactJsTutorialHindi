import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteSingleUser } from '../store/slices/UserSlice'

function Mid() {
    const dispatch = useDispatch()
    const mydata = useSelector((state) => {
        //it runs twice
        return state.users
    })
    const deleteOne = (i) => {
        dispatch(deleteSingleUser(i))
    }
    return (
        <div style={{ display: "flex" }}>
            {
                mydata.map((element, i) => {
                    return (
                        <div key={i} style={{ margin: "5px" }} >
                            <h1>{element}</h1>
                            <button onClick={() => { deleteOne(i) }}>deleteIcon</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Mid