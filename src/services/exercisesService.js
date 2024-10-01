import { get } from "../utils";
export const getExerciseByTopicId = async (topicId, limit = 0) => {
    const result = await get(`exercises/topics/${topicId}/${limit}`);
    return result;
}
export const getExerciseById = async (id) => {
    const result = await get(`exercises?id=${id}`);
    return result;
}