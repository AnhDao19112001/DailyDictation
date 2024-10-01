import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getExerciseByTopicId } from "../../../services/exercisesService";
import { getTopicList } from "../../../services/topicService";

const CompleteExercise = (props) => {
    const {
        exercise,
        setCompleteExercise,
        setIsPlaying,
        setListAudio
    } = props;
    const { idExercise } = useParams();
    const [exerciseNext, setExerciseNext] = useState(null);
    const navigation = useNavigate();
    const fetchApi = async () => {
        const getListExercise = await getExerciseByTopicId(exercise.topicId);
        const sortListById = getListExercise.exercises.sort((a, b) => a.id - b.id);
        const indexExercise = getListExercise.exercises.findIndex(item => item.id === parseInt(idExercise));
        if (indexExercise + 1 !== sortListById.length) {
            console.log(sortListById[indexExercise + 1]);
            setExerciseNext(sortListById[indexExercise + 1].id)
        } else {
            setExerciseNext(-1);
        }
    }
    useEffect(() => {
        fetchApi();
    }, [idExercise]);
    const handleNextExercise = () => {
        setCompleteExercise(false);
        navigation(`/listen-and-type/${exerciseNext}`);
        setIsPlaying(false)
        setListAudio(0);
    }
    const handleRepeatExercise = () => {
        setCompleteExercise(false);
    }
    return (
        <div className="complete-exercise">
            <div className="title">
                <h2>
                    You have completed this exercise,
                    <br />
                    good job!
                </h2>
            </div>
            <div className="icon-success">
                <i className="fa-solid fa-circle-check"></i>
            </div>
            <div className="complete-button-group">
                {
                    exerciseNext && (
                        <>
                            {
                                exerciseNext !== -1 ? (
                                    <>
                                        <button className="button-complete" onClick={handleNextExercise}>
                                            Next Exercise
                                        </button>
                                        <button className="button-complete" onClick={handleRepeatExercise}>
                                            Repeat this exercise
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="button-complete" onClick={handleRepeatExercise}>
                                            Repeat this exercise
                                        </button>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </div>
            <div className="all-topic">
                <Link to="/all-topics">View all topics</Link>
            </div>
        </div>
    )
}
export default CompleteExercise;