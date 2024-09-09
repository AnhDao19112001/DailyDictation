import { Link } from "react-router-dom"
import "./TestAndAudio.css"
import Setting from "./Setting";
import { useState } from "react";
const TestAndAudio = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    return (
        <>
            <Setting modalIsOpen={modalIsOpen} setModal={setIsOpen} />
            <main>
                <div className="breadcrumb-container">
                    <nav>
                        <Link href="#">All topics</Link> / <a href="#">Short Stories</a> / 1. First
                        snowfall (Listen &amp; Type)
                    </nav>
                </div>
                <div className="container">
                    <div className="title-test">
                        <h1>1. First snowfall (Listen and Type)</h1>
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
                                If possible, read out loud the sentence after completing it!
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