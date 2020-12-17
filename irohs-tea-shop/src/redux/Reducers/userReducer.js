const initalState = {
    user: {
        cart: []
    },
    token: ""
}

// the return value of your reducer become global state
    // this is different from react setState where the partial state `merges` the new state and the old state for you
const userReducer = (state = initalState, {type, payload}) => {
    switch(type) {
        case "SAVE_USER_TO_STATE":
            return {...state, user: payload.user, token: payload.token}
        default:
            return state
    }
}

export default userReducer