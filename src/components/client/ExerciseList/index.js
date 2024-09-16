import { Link, useParams } from "react-router-dom"
import "./ExerciseList.css"
import { getTopicById } from "../../../services/topicService"
import { useEffect, useState } from "react";
import { getExerciseByTopicId } from "../../../services/exercisesService";
const ExerciseList = () => {
    const { idTopic } = useParams();
    const [topic, setTopic] = useState({});
    const [exercises, setExercises] = useState([]);
    const fetchApi = async () => {
        const topic = await getTopicById(idTopic);
        const exercises = await getExerciseByTopicId(idTopic);
        setTopic(topic[0]);
        setExercises(exercises);
    }

    useEffect(() => {
        fetchApi();
    }, [])
    console.log(topic)
    return (
        <>
            <div className="container short-stories">
                <nav>
                    <Link to="/all-topics">All topics</Link> / {topic ? topic.name : ""}
                </nav>
                <header className="header-stories">
                    <h1>{topic ? topic.name : ""}</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        <button>OK</button>
                    </div>
                </header>
                <main>
                    <ul className="story-list">
                        {
                            exercises.map((item, index) => (
                                <li>
                                    <Link to={`/listen-and-type/${item.id}`}>1. First snowfall</Link>
                                </li>
                            ))
                        }

                    </ul>
                </main>
            </div>

        </>
    )
}
export default ExerciseList;