import { get } from "../utils"

export const getListTopicByQuantity = async (number) => {
    const result = await get(`topic?_limit=${number}`);
    return result;
}
export const getTopicList = async () => {
    const result = await get(`topic`);
    return result;
}
export const getTopicById = async (id) => {
    const result = await get(`topic?id=${id}`)
    return result;
}