import { Link, useParams } from "react-router-dom"
import "./TestAndAudio.css"
import Setting from "./Setting";
import { useEffect, useRef, useState } from "react";
import { getExerciseById } from "../../../services/exercisesService";
import { getTopicById } from "../../../services/topicService";
import { getTipByIdExercise } from "../../../services/tipService";
import TipsItem from "./TipsItem";
import Audio from "./Audio";
import { capitalizeFirstLetter } from "../../../helpers/customString";
import WaveSurfer from 'wavesurfer.js';
import test from "../../../audio/test.mp3";
const TestAndAudio = () => {
    // Modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    // End modal

    // fetch data
    const { idExercise } = useParams();
    const [topic, setTopic] = useState({});
    const [exercise, setExercise] = useState({});
    const [tips, setTip] = useState([]);
    const fetchApi = async () => {
        const exercise = await getExerciseById(idExercise);
        setExercise(exercise[0]);
        const topic = await getTopicById(exercise[0].topicId);
        setTopic(topic[0]);
        const tip = await getTipByIdExercise(exercise[0].id);
        setTip(tip);
    }
    // fetch data



    // Handle audio
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [userInteracted, setUserInteracted] = useState(false);
    const [maxRepeat, setMaxRepeat] = useState(3);
    const handleUserInteraction = () => {
        setUserInteracted(true); // Đánh dấu đã có tương tác người dùng
    };
    useEffect(() => {
        fetchApi();
        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#ddd',
            progressColor: '#ff5500',
            barWidth: 2,
            height: 54,
            muted: true
        });

        // Tải file âm thanh
        wavesurfer.current.load(test);

        wavesurfer.current.setPlaybackRate(playbackRate);


        // Dọn dẹp sau khi component bị hủy
        return () => wavesurfer.current.destroy();
    }, [])
    // End handleAudio

    return (
        <>
            <Setting
                modalIsOpen={modalIsOpen}
                setModal={setIsOpen}
                wavesurfer={wavesurfer}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                userInteracted={userInteracted}
            />
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
                        </div>
                    </div>
                    <main>
                        <Audio
                            wavesurfer={wavesurfer}
                            waveformRef={waveformRef}
                            playbackRate={playbackRate}
                            setPlaybackRate={setPlaybackRate}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            handleUserInteraction={handleUserInteraction}
                            userInteracted={userInteracted}
                            maxRepeat={maxRepeat}
                            setMaxRepeat={setMaxRepeat}
                        />
                    </main>
                    <section className="tips-and-links">

                        {
                            tips.map((item, index) => (
                                <TipsItem id={index} item={item} key={index} />
                            ))
                        }
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