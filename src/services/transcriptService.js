import { get } from "../utils";
export const getTranscriptByIdExercide = async (idExercise) => {
    const result = await get(`transcripts?exerciseId=${idExercise}`);
    return result;
}