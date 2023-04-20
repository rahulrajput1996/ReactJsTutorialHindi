import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllUsers } from '../store/slices/UserSlice'

function Bottom() {
    const dispatch = useDispatch();
    const deleteUsers = () => {
        dispatch(deleteAllUsers());
    }
    const data = useSelector((state) => {
        return state.amount
    })
    return (
        <div>
            <button onClick={() => deleteUsers()}>Delete all users</button>
            <h1>amount is {data}</h1>
        </div>
    )
}

export default Bottom