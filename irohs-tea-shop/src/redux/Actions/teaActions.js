export const fetchAllTeas = (array) => {
    return {
        type: "INITIALIZE_TEAS",
        payload: array
    }
}