import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../store/slices/AmountSlice';
import { decrement } from '../store/slices/AmountSlice';

function Amountupdate() {
    const dispatch = useDispatch();
    const increaseAmount = (a) => {
        dispatch(increment(a))
    }
    const decreaseAmount = (a) => {
        dispatch(decrement(a))
    }
    return (
        <div>
            <button onClick={() => { increaseAmount(10) }}>Increase amount</button>
            <br />
            <button onClick={() => { decreaseAmount(15) }}>Decrease amount</button>
        </div>
    )
}

export default Amountupdate