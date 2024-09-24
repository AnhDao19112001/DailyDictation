import { Link, useParams } from "react-router-dom"
import "./ExerciseList.css"
import { getTopicById } from "../../../services/topicService"
import { useEffect, useState } from "react";
import { getExerciseByTopicId } from "../../../services/exercisesService";
const ExerciseList = () => {
    const { idTopic } = useParams();
    const [topic, setTopic] = useState({});
    const [exercises, setExercises] = useState([]);
    const [itemExercise, setItemExercise] = useState([]);
    const fetchApi = async () => {
        const topic = await getTopicById(idTopic);
        const exercises = await getExerciseByTopicId(idTopic);
        console.log(topic);
        console.log(exercises);

        setTopic(topic.topics);
        setExercises(exercises.exercises);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const handleSearch = (e) => {
        const itemExercise = exercises.filter((item) => {
            const regex = new RegExp(e.target.value, 'i');

            return regex.test(item.title);
        })
        if (itemExercise.length) {
            console.log(itemExercise)
            setItemExercise(itemExercise)
        } else {
            setItemExercise([]);
        }
    }
    return (
        <>
            <div className="container short-stories">
                <nav>
                    <Link to="/all-topics">All topics</Link> / {topic ? topic.name : ""}
                </nav>
                <header className="header-stories">
                    <h1>{topic ? topic.name : ""}</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" onChange={handleSearch} />
                        <button>OK</button>
                    </div>
                </header>
                <main>
                    <ul className="story-list">
                        {
                            itemExercise.length ?
                                itemExercise.map((item, index) => (
                                    <li key={index}>
                                        <Link to={`/listen-and-type/${item.id}`}>{item.title}</Link>
                                    </li>
                                )) :
                                exercises.map((item, index) => (
                                    <li key={index}>
                                        <Link to={`/listen-and-type/${item.id}`}>{item.title}</Link>
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