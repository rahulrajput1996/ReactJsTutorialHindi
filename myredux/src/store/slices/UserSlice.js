import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: ["abc"],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        deleteSingleUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteAllUsers(state, action) {
            return [];
        },
    }
})
export default userSlice.reducer;
export const { addUser, deleteSingleUser, deleteAllUsers } = userSlice.actions;