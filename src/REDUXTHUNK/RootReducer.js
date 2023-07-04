import { combineReducers } from "redux";
import Reducer from "./Reducer";

const ROOTREDUCERTHUNK = combineReducers({
    thunk: Reducer
})

export default ROOTREDUCERTHUNK