import { get, post } from "../utils";
export const getUser = async (data) => {
    const result = await get(`users?email=${data.email}&password=${data.password}`);
    return result;
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
export const checkEmailExist = async (data) => {
    const result = await get(`users?email=${data.email}`);
    return result;
}
export const createUser = async (option) => {
    const result = await post(`users`, option);
    return result;
}
