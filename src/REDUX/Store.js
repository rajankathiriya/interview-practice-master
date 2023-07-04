import { createStore } from 'redux'
import Reducer from './Reducer'
import ROOT from './RootReducer'


const Store = createStore(ROOT)

export default Store


// import { createStore } from "redux";
// import ROOT from "./RootReducer";

// const STORE = createStore(ROOT)

// export default STORE
