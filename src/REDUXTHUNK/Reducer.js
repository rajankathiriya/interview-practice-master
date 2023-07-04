export default ((state = 0, { type, payload }) => {
    switch (type) {
        case "ADD":
            return state = state + 1;

        case "DEL":
            if (state > 0) {
                state = state - 1
            } else {
                state = 0
            };

        default:
            return state
    }
})