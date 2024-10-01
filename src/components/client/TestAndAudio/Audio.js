import { useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter, maskWords, splitString } from "../../../helpers/customString";
const listSpeedRate = [
    0.5, 0.75, 1, 1.75, 2
]

const Audio = (props) => {
    const {
        waveSurferRef,
        waveformRef,
        isPlaying,
        setIsPlaying,
        speedSound,
        setSpeedSound,
        setCountPlayback,
        audio,
        setCompleteExercise,
        listAudio
    } = props;
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying); // Toggle the play/pause state        waveSurferRef.current.playPause();
        waveSurferRef.current.playPause();
    }
    const showSpeedRef = useRef(null);
    const [isShowSpeed, setIsShowSpeed] = useState(false);
    const handleShowSpeed = () => {
        setIsShowSpeed(!isShowSpeed);
    }
    const [pagination, setPagination] = useState(0);
    useEffect(() => {
        const handleCloseSpeed = (e) => {
            if (showSpeedRef.current.contains(e.target)) {
                if (isShowSpeed) {
                    setIsShowSpeed(true);
                } else {
                    setIsShowSpeed(false);
                }
            } else {
                setIsShowSpeed(false)
            }
        }
        window.addEventListener("click", handleCloseSpeed)
        return () => {
            window.removeEventListener("click", handleCloseSpeed)
        }
    }, [isShowSpeed])

    const handleSetSpeedSound = (e) => {
        waveSurferRef.current.seekTo(0);
        waveSurferRef.current.pause();
        const number = parseFloat(e.target.attributes.rate.value);
        waveSurferRef.current.setPlaybackRate(number);
        setSpeedSound(number);
        setCountPlayback(1);
        setIsPlaying(false);
    }
    const textareaRef = useRef(null);
    const [isSkip, setIsSkip] = useState(true);
    const [isShowAnswer, setIsShowAnswer] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isShowText, setIsShowText] = useState(false);
    const handlePagination = () => {
        if (pagination + 1 < audio.length) {
            setPagination(pagination + 1);
            setIsSkip(true);
            setIsCorrect(false);
            setIsShowAnswer(false);
            textareaRef.current.value = "";
        } else {
            setCompleteExercise(true)
        }
    }
    const handleSkip = () => {
        if (audio.length) {
            textareaRef.current.value = capitalizeFirstLetter(audio[pagination].textEng);
            setIsSkip(false);
            setIsShowAnswer(false)
        }
    }
    const handleCheckText = () => {
        if (audio.length) {
            const answer = textareaRef.current.value.trim().split(/\s+/).join(" ");
            console.log(answer.toLowerCase());
            console.log(audio[pagination].textEng.toLowerCase());
            if (answer.toLowerCase() === audio[pagination].textEng.toLowerCase()) {
                setIsShowAnswer(true);
                setIsCorrect(true);
                setIsSkip(false);
            } else {
                setIsShowAnswer(true);
            }
        }
    }
    return (
        <>
            <main>
                <div className="audio-container">
                    <div className="test-quantity">
                        {
                            listAudio !== 0 && (
                                `${pagination + 1} / ${audio.length}`
                            )
                        }
                    </div>
                    <div className="audio-controls">
                        <button className="audio-button" onClick={handlePlayPause}>
                            {
                                isPlaying ? (
                                    <>
                                        <i className="fa-solid fa-pause"></i>

                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-play"></i>
                                    </>
                                )
                            }
                        </button>
                        <div className="waveform" ref={waveformRef}>
                        </div>
                        <div className="speed-list">
                            <ul>
                                <li onClick={handleShowSpeed} ref={showSpeedRef}>{speedSound} x</li>
                                {
                                    isShowSpeed ?
                                        (
                                            <ul className="speed-show">
                                                {
                                                    listSpeedRate.map((item, index) => (
                                                        <li rate={item}
                                                            onClick={(e) => {
                                                                handleSetSpeedSound(e);
                                                            }}
                                                            key={index}
                                                        >
                                                            {item} x
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ) : (
                                            <></>
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="input-container">
                        <textarea placeholder="Type what you hear..." ref={textareaRef}></textarea>
                        <button className="microphone-button">
                            <i className="fas fa-microphone"></i>
                        </button>
                    </div>
                    <div className="button-group">
                        <div
                            style={
                                {
                                    display: "flex",
                                    alignItems: "center"
                                }
                            }
                        >

                            {
                                isShowAnswer ? (
                                    <div className="answer">
                                        {
                                            isCorrect ? (
                                                <>
                                                    <i className="fa-solid fa-circle-check true-icon"></i>
                                                    <span className="true-answer">You are correct!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-triangle-exclamation wrong-icon"></i>
                                                    <span className="wrong-answer">Correct answer</span>
                                                </>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <>

                                        {
                                            isSkip === true && (
                                                <button className="check-button" onClick={handleCheckText}>Check</button>
                                            )
                                        }
                                    </>
                                )

                            }

                        </div>

                        {
                            isSkip ? (
                                <div>
                                    {
                                        isShowAnswer ? (
                                            <>
                                                {isShowText ? (
                                                    <i className="fa-regular fa-eye icon-show-answer" onClick={() => { setIsShowText(false) }}></i>
                                                ) : (
                                                    <i className="fa-regular fa-eye-slash icon-show-answer" onClick={() => { setIsShowText(true) }}></i>
                                                )}
                                            </>
                                        ) : ("")
                                    }
                                    <button className="skip-button" onClick={handleSkip}>Skip</button>
                                </div>
                            ) : (
                                <>
                                    <button className="next-button" onClick={handlePagination}>Next</button>
                                </>
                            )
                        }
                    </div>
                    <div className="show-answer">
                        {
                            isShowAnswer ? (
                                audio.length ? (
                                    <>
                                        {
                                            isCorrect === false && (
                                                <>
                                                    <b>
                                                        {
                                                            capitalizeFirstLetter(splitString(audio[pagination].textEng)[0]) + " "
                                                        }
                                                    </b>
                                                    {
                                                        isShowText ? (
                                                            splitString(audio[pagination].textEng)[1]
                                                        ) : (
                                                            maskWords(splitString(audio[pagination].textEng)[1])
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </>
                                ) : (
                                    ""
                                )
                            ) : (
                                ""
                            )
                        }
                    </div>
                    {
                        isSkip === false ? (
                            <>
                                {
                                    isCorrect === false && (
                                        <>
                                            <div className="translation-group">
                                                <div className="translation">
                                                    <p className="title">Translation</p>
                                                    <p className="textVN">
                                                        {
                                                            audio.length ? (
                                                                capitalizeFirstLetter(audio[pagination].textVN)
                                                            ) : (
                                                                ""
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                                <div className="translation">
                                                    <p className="title">Pagination</p>
                                                    <p className="textVN">
                                                        {
                                                            audio.length ? (
                                                                capitalizeFirstLetter(audio[pagination].textEng)
                                                            ) : (
                                                                ""
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </main>
        </>
    )
}
export default Audio;