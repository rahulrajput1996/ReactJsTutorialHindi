import { createSlice } from "@reduxjs/toolkit";
const amountSlice = createSlice({
    name: "myamount",
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state + action.payload
        },
        decrement(state, action) {
            return state - action.payload
        }
    }
})
export default amountSlice.reducer;
export const { increment, decrement } = amountSlice.actions;