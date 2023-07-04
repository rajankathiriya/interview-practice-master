import { applyMiddleware, createStore } from "redux";
import ROOTREDUCERTHUNK from "./RootReducer";
import thunk from "redux-thunk";

const middle = [thunk]

const STORETHUNK = createStore(ROOTREDUCERTHUNK, applyMiddleware(...middle))

export default STORETHUNK