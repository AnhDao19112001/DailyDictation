import { get, post } from "../utils";
export const getUser = async (data) => {
    const result = await get(`users?email=${data.email}&password=${data.password}`);
    return result;
}
export const checkEmailExist = async (data) => {
    const result = await get(`users?email=${data.email}`);
    return result;
}
export const createUser = async (option) => {
    const result = await post(`users`, option);
    return result;
}
