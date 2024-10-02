import { Link, useParams } from "react-router-dom"
import "./TestAndAudio.css"
import Setting from "./Setting";
import { useEffect, useRef, useState } from "react";
import Audio from "./Audio";
import { capitalizeFirstLetter } from "../../../helpers/customString";
import WaveSurfer from 'wavesurfer.js';
import test from "../../../audio/test.mp3";
import { getExerciseById } from "../../../services/exercisesService";
import { getTopicById } from "../../../services/topicService";
import { getAudioUrlByIdExercise } from "../../../services/audioUrlsService";
import CompleteExercise from "./CompleteExercise";
const TestAndAudio = () => {
    const [modalIsOpen, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modalIsOpen);
    }
    const { idExercise } = useParams();
    // handle audio 
    const waveformRef = useRef(null);
    const waveSurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [keyReplay, setKeyReplay] = useState("Control");
    const [playbackCount, setPlaybackCount] = useState(3);
    const [countPlayback, setCountPlayback] = useState(1);
    const [timeBetweenReplay, setTimeBetweenReplay] = useState(500);
    const [speedSound, setSpeedSound] = useState(1);
    // handle audio end

    // get api
    const [exercise, setExercise] = useState({});
    const [topic, setTopic] = useState({});
    const [audio, setAudio] = useState({});
    // get api end

    // menu dropdown 
    const [openMenu, setOpenMenu] = useState(null);
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu); // Nếu menu đã mở, đóng nó
    };
    // menu dropdown end

    // handle assignment transfer
    const [completEXercise, setCompleteExercise] = useState(false);
    // handle assignment transfer end

    // handle list 
    const [listAudio, setListAudio] = useState(0);
    // handle list end
    const fetchApi = async () => {
        const getExercise = await getExerciseById(idExercise);
        setExercise(getExercise.exercise);
        if (completEXercise === false) {
            const getTopic = await getTopicById(getExercise.exercise.topicId);
            setTopic(getTopic.topics[0])
            const getAudio = await getAudioUrlByIdExercise(getExercise.exercise.id);
            setAudio(getAudio.audio_urls)
            setListAudio(getAudio.audio_urls.length);
        }
    }
    useEffect(() => {
        fetchApi();
    }, [idExercise])
    useEffect(() => {

        if (waveformRef.current) {
            // Initialize WaveSurfer instance
            waveSurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#D9DCFF',
                progressColor: '#4353FF',
                height: 46,
                barWidth: 2,
                responsive: true,
                backend: "WebAudio"
            });

            waveSurferRef.current.load(test); // Load the audio into WaveSurfer
            // Load an audio file
            const handleKeyDown = (event) => {
                switch (event.key) {
                    case keyReplay: // Spacebar for play/pause
                        handleRepayKey();
                        event.preventDefault(); // Prevent default spacebar behavior (scrolling)
                        break;
                    default:
                        break;
                }
            };

            window.addEventListener('keyup', handleKeyDown);
            // Clean up when the component is unmounted
            return () => {
                window.removeEventListener('keyup', handleKeyDown);
                waveSurferRef.current.destroy();
            };
        }
    }, [keyReplay, idExercise]);
    const handleRepayKey = () => {
        setIsPlaying(true);
        waveSurferRef.current.seekTo(0);
        waveSurferRef.current.play();
    }
    useEffect(() => {
        const hanleReplay = () => {
            if (countPlayback < playbackCount) {
                setCountPlayback((count) => count + 1);
                waveSurferRef.current.seekTo(0);
                setIsPlaying(false);
                setTimeout(() => {
                    waveSurferRef.current.play();
                    setIsPlaying(true)
                }, timeBetweenReplay)
            } else {
                waveSurferRef.current.seekTo(0);
                waveSurferRef.current.pause();
                setCountPlayback(1);
                setIsPlaying(false);
            }
        }
        waveSurferRef.current.on("finish", hanleReplay)

        return () => {
            waveSurferRef.current.un('finish', hanleReplay); // Cleanup event listener
        };
    }, [countPlayback, playbackCount, timeBetweenReplay, idExercise]);
    return (
        <>
            <Setting
                modalIsOpen={modalIsOpen}
                handleModal={handleModal}
                keyReplay={keyReplay}
                setKeyReplay={setKeyReplay}
                setPlaybackCount={setPlaybackCount}
                setCountPlayback={setCountPlayback}
                playbackCount={playbackCount}
                waveSurferRef={waveSurferRef}
                setIsPlaying={setIsPlaying}
                setTimeBetweenReplay={setTimeBetweenReplay}
                timeBetweenReplay={timeBetweenReplay}
            />
            <main>
                <div className="breadcrumb-container">
                    <nav>
                        <Link to="/all-topics">All topics</Link> /
                        <Link to={`/topic/${topic.id}`}>{capitalizeFirstLetter(topic.name)}</Link>/ 1. {capitalizeFirstLetter(exercise.title)} (Listen
                        &amp; Type)
                    </nav>
                </div>

                <div className="container">
                    {
                        completEXercise ? (
                            <CompleteExercise
                                exercise={exercise}
                                setCompleteExercise={setCompleteExercise}
                                setIsPlaying={setIsPlaying}
                                setListAudio={setListAudio}
                            />
                        ) : (
                            <>
                                <div className="title-test">
                                    <h1>{capitalizeFirstLetter(exercise.title)} (Listen and Type)</h1>
                                    <div className="setting">
                                        <i className="fa-solid fa-gear" onClick={handleModal}></i>
                                    </div>
                                </div>
                                <main>

                                    <Audio
                                        waveSurferRef={waveSurferRef}
                                        waveformRef={waveformRef}
                                        isPlaying={isPlaying}
                                        setIsPlaying={setIsPlaying}
                                        speedSound={speedSound}
                                        setSpeedSound={setSpeedSound}
                                        countPlayback={countPlayback}
                                        setCountPlayback={setCountPlayback}
                                        setCompleteExercise={setCompleteExercise}
                                        audio={audio}
                                        listAudio={listAudio}
                                    />
                                </main>
                            </>
                        )
                    }
                    <section className="tips-and-links">
                        <div className="accordion">
                            <div className="accordion-item">
                                <div className="accordion-header" onClick={() => toggleMenu('menu1')}>
                                    <span>Full Audio &amp; Transcript</span>
                                    {
                                        openMenu === 'menu1' ? (
                                            <i className="fa-solid fa-chevron-up"></i>
                                        ) : (

                                            <i className="fas fa-chevron-down" />
                                        )
                                    }
                                </div>
                                {
                                    openMenu === 'menu1' && (
                                        <div className="accordion-content">
                                            <audio controls>
                                                <source src="horse.ogg" type="audio/ogg" />
                                                <source src="horse.mp3" type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                            <div className="">
                                                {
                                                    exercise.textMain
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="accordion-item" onClick={() => toggleMenu('menu2')}>
                                <div className="accordion-header">
                                    <span>Quick links</span>
                                    {
                                        openMenu === 'menu2' ? (
                                            <i className="fa-solid fa-chevron-up"></i>
                                        ) : (

                                            <i className="fas fa-chevron-down" />
                                        )
                                    }
                                </div>
                                {
                                    openMenu === 'menu2' && (
                                        <div className="accordion-content">
                                            NO
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
export default TestAndAudio;