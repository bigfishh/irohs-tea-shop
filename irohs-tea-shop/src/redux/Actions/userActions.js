export const saveUserToState = (userInfo) => {
    return {
        type: "SAVE_USER_TO_STATE",
        payload: userInfo
    }
}

export const logUserOut = () => {
    return {
        type: "LOG_USER_OUT", 
        payload: {}
    }
}

export const addItemToCart = (newCart) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: newCart
    }
}

export const removeItemToCart = (updatedCart) => {
    return {
        type: "REMOVE_ITEM_TO_CART",
        payload: updatedCart
    }
}

export const checkoutCart = (updatedUser) => {
    return {
        type: "CHECKOUT_CURRENT_CART",
        payload: updatedUser
    }
}

