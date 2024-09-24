import { get } from "../utils";
export const getExerciseByTopicId = async (topicId, limit = 0) => {
    // let query = "";
    // if (limit) {
    //     query = `_limit=${limit}`
    // }
    const result = await get(`exercises/topics/${topicId}/${limit}`);
    return result;
}
export const getExerciseById = async (id) => {
    const result = await get(`exercise?id=${id}`);
    return result;
}