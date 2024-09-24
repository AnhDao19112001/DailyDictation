import { get } from "../utils"

export const getListTopicByQuantity = async (number) => {
    const result = await get(`topics/${number}`);
    return result;
}
export const getTopicList = async () => {
    const result = await get(`topics`);
    return result;
}
export const getTopicById = async (id) => {
    const result = await get(`topics/${id}`)
    return result;
}
