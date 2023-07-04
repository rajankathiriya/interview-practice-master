const initialState = 0

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "INC":
            return state = state + 1;
        case "DEC":
            if (state > 0) {
                return state = state - 1
            } else {
                return state = 0
            }
        case "MUL":
            return state = state * 2;
        case "DIV":
            return state = state / 2;
        case "RESET":
            return state = 0;

        default:
            return state
    }
}
// export default ((state, { type, action }) => {
//     switch (type) {
//         case "ADD":
//             return state = state + 1

//         default:
//             return state
//     }
// })