import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import AmountSlice from "./slices/AmountSlice";
const store = configureStore({
    reducer: {
        users: UserSlice,
        amount: AmountSlice
    }
})
export default store;