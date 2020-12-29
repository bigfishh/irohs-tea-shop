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
            return {...state, user: payload.user, cart: payload.user.current_cart.cart_teas, token: payload.token}
        case "ADD_ITEM_TO_CART":
            let foundItem = state.cart.find(({id}) => id === payload.id)
            if (foundItem) {
                foundItem.quantity = payload.quantity
                return {...state, user: {...state.user, current_cart: {...state.user.current_cart, cart_teas: [...state.user.current_cart.cart_teas]}}, cart:[...state.cart]}
            } else {
                return {...state, user: {...state.user, current_cart: {...state.user.current_cart, cart_teas: [...state.user.current_cart.cart_teas, payload]}}, cart: [...state.cart, payload]}
            }
        case "CHECKOUT_CURRENT_CART":
            return {...state, user: {...state.user, current_cart: payload.current_cart, past_orders: [...state.user.past_orders, payload.updated_cart]}, cart: []}
        default:
            return state
    }
}

export default userReducer