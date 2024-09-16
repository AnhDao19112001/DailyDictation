import { Link, useParams } from "react-router-dom"
import "./TestAndAudio.css"
import Setting from "./Setting";
import { useEffect, useState } from "react";
import { getExerciseById } from "../../../services/exercisesService";
import { getTopicById } from "../../../services/topicService";
import { getTipByIdExercise } from "../../../services/tipService";
const TestAndAudio = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const { idExercise } = useParams();
    const [topic, setTopic] = useState({});
    const [exercise, setExercise] = useState({});
    const [tip, setTip] = useState({});
    const fetchApi = async () => {
        const exercise = await getExerciseById(idExercise);
        setExercise(exercise[0]);
        const topic = await getTopicById(exercise[0].topicId);
        setTopic(topic[0]);
        const tip = await getTipByIdExercise(exercise[0].id);
        setTip(tip);
    }
    useEffect(() => {
        fetchApi();
    }, [])
    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    return (
        <>
            <Setting modalIsOpen={modalIsOpen} setModal={setIsOpen} />
            <main>
                <div className="breadcrumb-container">
                    <nav>
                        <Link to="/all-topics">All topics</Link> / <Link to={`/topic/${topic.id}`}>{capitalizeFirstLetter(topic.name)}</Link>/ 1. {exercise.title} (Listen &amp; Type)
                    </nav>
                </div>
                <div className="container">
                    <div className="title-test">
                        <h1>{exercise.title} (Listen and Type)</h1>
                        <div className="setting" onClick={openModal}>
                            <i className="fa-solid fa-gear"></i>
                            Setting
                        </div>
                    </div>
                    <main>
                        <div className="audio-container">
                            <div className="audio-controls">
                                <button className="audio-button">
                                    <i className="fas fa-play" />
                                </button>
                                <div className="waveform">{/* Simulate waveform here */}</div>
                                <button className="speed-button">1x</button>
                            </div>
                            <div className="input-container">
                                <textarea placeholder="Type what you hear..." defaultValue={""} />
                                <button className="microphone-button">
                                    <i className="fas fa-microphone" />
                                </button>
                            </div>
                            <div className="button-group">
                                <button className="check-button">Check</button>
                                <button className="skip-button">Skip</button>
                            </div>
                        </div>
                    </main>
                    <section className="tips-and-links">
                        <div className="tip">
                            <i className="fas fa-lightbulb" />
                            <span>
                                {tip.content}
                            </span>
                            <button className="refresh-button">
                                <i className="fas fa-sync-alt" />
                            </button>
                        </div>
                        <div className="accordion">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <span>Full Audio &amp; Transcript</span>
                                    <i className="fas fa-chevron-down" />
                                </div>
                                <div className="accordion-content">{/* Content goes here */}</div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <span>Quick links</span>
                                    <i className="fas fa-chevron-down" />
                                </div>
                                <div className="accordion-content">{/* Content goes here */}</div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    )
}
export default TestAndAudio;