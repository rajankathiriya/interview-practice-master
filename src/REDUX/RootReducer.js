import { combineReducers } from "redux";
import Reducer from "./Reducer";

const ROOT = combineReducers({
    self: Reducer
})

export default ROOT


// import { combineReducers } from "redux";
// import Reducer from "./Reducer";

// const ROOT = combineReducers({
//     redux: Reducer
// })

// export default ROOT;