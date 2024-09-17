const initialValueClient = {
    isAuthenticated: false,
    user: null,
}
export const authenReducerClient = (state = initialValueClient, action) => {
    if (action.type === "SUCCESS") {
        return {
            ...state,
            isAuthenticated: true,
            user: action.data
        };
    }
    else if (action.type === "FAILURE") {
        return {
            ...state
        }
    }
    else {
        return state;
    }
}
export const authenReducerAdmin = (state, action) => {
    if (action.type === "CHECK_AUTHEN_ADMIN") {
        return action.status;
    } else {
        return state;
    }
}
