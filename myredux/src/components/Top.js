import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice';
function Top() {
    const dispatch = useDispatch();
    const genearateRandom = () => {
        return Math.floor(Math.random() * 10) + 1;
    }
    const addSingleUser = (ran) => {
        dispatch(addUser(ran));
    }
    return (
        <div>
            <button onClick={() => { addSingleUser(genearateRandom()) }}> add user</button>
        </div>
    )
}
export default Top