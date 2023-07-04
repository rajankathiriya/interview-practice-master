import { createSlice } from "@reduxjs/toolkit";

const REDUCER = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        Add: (state) => {
            return state + 1
        },
        Dec: (state) => {
            if (state > 0) {
                return state - 1
            } else {
                return state
            }
        }
    }
})

export const { Add, Dec } = REDUCER.actions

export default REDUCER.reducer