export const saveUserToState = (userInfo) => {
    return {
        type: "SAVE_USER_TO_STATE",
        payload: userInfo
    }
}