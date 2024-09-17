import { get } from "../utils";
export const getExerciseByTopicId = async (topicId, limit = 0) => {
    let query = "";
    if (limit) {
        query = `_limit=${limit}`
    }
    const result = get(`exercise?topicId=${topicId}&${query}`);
    return result;
}
export const getExerciseById = async (id) => {
    const result = get(`exercise?id=${id}`);
    return result;
}