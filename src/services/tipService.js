import { get } from "../utils";
export const getTipByIdExercise = async (idExercise) => {
    const result = await get(`tip?exerciseId=${idExercise}`);
    return result;
}