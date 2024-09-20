import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
const Audio = (props) => {
    const { wavesurfer, waveformRef, playbackRate, setPlaybackRate, isPlaying, setIsPlaying } = props;
    const [showSpeed, setShowSpeed] = useState(false);
    const speed = useRef(null);
    const handleShowSpeed = () => {
        setShowSpeed(!showSpeed);
        console.log(showSpeed)
    }
    console.log(isPlaying);
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        wavesurfer.current.playPause();
    }
    const handleRateChange = (e) => {
        const newSpeed = parseFloat(e.target.attributes.rate.value);
        setPlaybackRate(newSpeed);
        wavesurfer.current.setPlaybackRate(newSpeed);
    };
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!speed.current.contains(e.target)) {
                setShowSpeed(false)
            }
        })
    }, [])
    return (
        <>
            <div className="audio-container">
                <div className="quantity-exercise">
                    1 / 2
                </div>
                <div className="audio-controls">
                    <button className="audio-button" onClick={() => {
                        handlePlayPause();
                    }}>
                        {
                            isPlaying ? (
                                <i className="fa-solid fa-pause"></i>
                            ) : (
                                <i className="fas fa-play"></i>
                            )
                        }
                    </button>
                    <div className="waveform" ref={waveformRef}></div>
                    <div className="speed-list">
                        <ul>
                            <li onClick={handleShowSpeed} ref={speed}>{playbackRate}x</li>
                            {
                                showSpeed ? (
                                    <ul className="speed-show">
                                        <li rate="0.5" onClick={(e) => {
                                            handleRateChange(e);
                                            handleShowSpeed();
                                        }}>0.5x</li>
                                        <li rate="0.75" onClick={(e) => {
                                            handleRateChange(e);
                                            handleShowSpeed();
                                        }}>0.75x</li>
                                        <li rate="1" onClick={(e) => {
                                            handleRateChange(e);
                                            handleShowSpeed();
                                        }}>1x</li>
                                        <li rate="1.5" onClick={(e) => {
                                            handleRateChange(e);
                                            handleShowSpeed();
                                        }}>1.5x</li>
                                        <li rate="1.75" onClick={(e) => {
                                            handleRateChange(e);
                                            handleShowSpeed();
                                        }}>1.75x</li>
                                        <li rate="2" onClick={(e) => {
                                            handleRateChange(e);
                                            handleShowSpeed();
                                        }}>2x</li>
                                    </ul>
                                ) : (<></>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="input-container">
                    <textarea placeholder="Type what you hear..." defaultValue={""} />
                    <button className="microphone-button">
                        <i className="fas fa-microphone" />
                    </button>
                </div>
                <div className="button-group">
                    <button className="check-button">Check</button>
                    <div className="button-page-turn">
                        <button className="skip-button">Skip</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Audio;