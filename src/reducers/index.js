import { combineReducers } from "redux";
import { authenReducerAdmin } from "./authentication";
import { authenReducerClient } from "./authentication";
const allReducers = combineReducers({
    authenReducerAdmin,
    authenReducerClient
})
export default allReducers