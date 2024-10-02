import "./AvailableExercises.css";
import { getListTopicByQuantity } from "../../../services/topicService";
import { useCallback, useEffect, useState } from "react";
import { getExerciseByTopicId } from "../../../services/exercisesService";
import AvailableItem from "./AvailableItem";
const AvailableExercises = () => {
    const [availableExercises, setAvailableExercises] = useState([]);
    const fetchApi = async () => {
        let limit = 8;
        const listTopics = await getListTopicByQuantity(limit);
        for (const topic of listTopics.topics) {
            const listExercise = await getExerciseByTopicId(topic.id, 5)
            topic.exercises = listExercise.exercises;
        }
        const array = [];
        limit /= 2;
        for (let i = 0; i < listTopics.topics.length; i += limit) {

            array.push(listTopics.topics.slice(i, i + limit));
        }
        setAvailableExercises(array);
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <section className="available-exercises">
            <div className="container">
                <h2>Available Exercises</h2>
                <p className="intro-text">
                    Explore a variety of exercises designed to improve your English skills
                    across different topics.
                </p>
                <div className="exercise-columns">
                    <AvailableItem data={availableExercises} />
                </div>
            </div>
        </section>

    )
}
export default AvailableExercises