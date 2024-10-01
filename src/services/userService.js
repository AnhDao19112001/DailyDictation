import { get, post, postLogin, postRegister, postTest } from "../utils";
import "core-js/stable/atob";
export const getUser = async (data) => {
    try {
        const result = await postLogin(`login`, data);
        if (result.token) {
            localStorage.setItem("token", result.token);
        }
        return result;
    } catch (error) {
        throw error;
    }
}
export const getUserById = async (id) => {
    if (id !== "") {
        const result = await get(`users?id=${id}`);
        return result;
    }
    else {
        return [];
    }
}
export const getUserByToken = async (token) => {
    if (token !== "") {
        const result = await get(`users?token=${token}`);
        return result;
    } else {
        return [];
    }
}
export const checkUserExist = async (data) => {
    const result = await get(`users?email=${data.username}`);
    return result;
}
export const createUser = async (data) => {
    const result = await postRegister(`register`, data);
    console.log(result);

    return result;
}

