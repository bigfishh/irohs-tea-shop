export const saveUserToState = (userInfo) => {
    return {
        type: "SAVE_USER_TO_STATE",
        payload: userInfo
    }
}

export const addItemToCart = (newCart) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: newCart
    }
}

export const checkoutCart = (updatedUser) => {
    return {
        type: "CHECKOUT_CURRENT_CART",
        payload: updatedUser
    }
}