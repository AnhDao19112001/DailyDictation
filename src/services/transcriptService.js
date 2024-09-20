import { get } from "../utils";
export const getTranscriptByIdExercide = async (idExercise) => {
    const result = await get(`transcripts?exerciseId=${idExercise}`);
    return result;
}
export const getTranscriptById = async (id) => {
    const result = await (`transcripts?id=${id}`);
    return result;
}