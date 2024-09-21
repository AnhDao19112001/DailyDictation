const initialValueClient = {
    isAuthenticated: false,
    user: null,
}
export const authenReducerClient = (state = initialValueClient, action) => {
    console.log(action.status);
    if (action.type === "SUCCESS") {
        return {
            ...state,
            isAuthenticated: true,
            user: action.status
        };
    }
    else if (action.type === "FAILURE") {
        return {
            ...state,
            isAuthenticated: false,
            user: null
        }
    }
    else {
        return state;
    }
}
export const authenReducerAdmin = (state = "", action) => {
    if (action.type === "CHECK_AUTHEN_ADMIN") {
        return action.status;
    } else {
        return state;
    }
}
