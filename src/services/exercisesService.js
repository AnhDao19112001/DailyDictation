import { get } from "../utils";
export const getExerciseByTopicId = async (topicId) => {
    const result = get(`exercise?topicId=${topicId}&_limit=5`);
    return result;
}
export const getExerciseById = async (id) => {
    const result = get(`exercise?id=${id}`);
    return result;
}