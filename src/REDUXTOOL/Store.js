import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const store = configureStore({
    reducer: {
        sd: Reducer
    }
})

export default store