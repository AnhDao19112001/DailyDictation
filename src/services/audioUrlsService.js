import { get } from "../utils";
export const getAudioUrlByIdExercise = async (idExercise) => {
    const result = await get(`audioUrls?exerciseId=${idExercise}`);
    return result;
}
export const getAudioByIdTranscript = async (id) => {
    const result = await get(`audioUrls?idTranscript=${id}`);
    return result;
}