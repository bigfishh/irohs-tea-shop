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
            console.log("payload", payload)
            return {...state, user: payload.user, cart: payload.user.current_cart.cart_teas, token: payload.token}
        case "ADD_ITEM_TO_CART":
            return {...state, cart: [...state.cart, payload]}
        default:
            return state
    }
}

export default userReducer