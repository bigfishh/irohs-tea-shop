// Below is a reducer (function definition)
// The return value of our reducer becomes our global state
const initialState = {
    teas: []
}

const teaReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INITIALIZE_TEAS":
            return {
                ...state,
                teas: action.payload
            }
        default: 
            return state
    }
}

export default teaReducer