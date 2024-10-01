import { get } from "../utils";
export const getAudioUrlByIdExercise = async (idExercise) => {
    const result = await get(`audioUrls?exerciseId=${idExercise}`);
    return result;
}
export const getAudioByIdExerciseLimit = async (id, limit = 1, start = 0) => {
    const result = await get(`audioUrles?exerciseId=${id}&?_sort=id&_limit=${limit}&_start=${start}`);
    return result;
}