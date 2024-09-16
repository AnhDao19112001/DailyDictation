import { getCookie } from "../helpers/cookie";
export const authenReducerClient = (state = getCookie("token") || "", action) => {
    if (action.type === "CHECK_AUTHEN_CLIENT") {
        return action.status;
    }
    else {
        return state;
    }
}
export const authenReducerAdmin = (state = getCookie("tokenAdmin"), action) => {
    if (action.type === "CHECK_AUTHEN_ADMIN") {
        return action.status;
    } else {
        return state;
    }
}
