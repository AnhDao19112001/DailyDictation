import { Link } from "react-router-dom"
import "./DicationList.css"
const DictationList = () => {
    return (
        <>
            <section className="dictations">
                <div className="container">
                    <h2>Latest Dictations</h2>
                    <p className="intro-text">
                        Sharpen your English skills with our latest dictation exercises, crafted
                        for learners at every level.
                    </p>
                    <div className="dictation-list">
                        <div className="dictation-item">
                            <div className="dictation-content">
                                <h4>Dictation 1</h4>
                                <p>Description of the dictation or a short snippet here.</p>
                            </div>
                            <Link href="#" className="btn">
                                Start Dictation
                            </Link>
                        </div>
                        <div className="dictation-item">
                            <div className="dictation-content">
                                <h4>Dictation 1</h4>
                                <p>Description of the dictation or a short snippet here.</p>
                            </div>
                            <Link href="#" className="btn">
                                Start Dictation
                            </Link>
                        </div>
                        <div className="dictation-item">
                            <div className="dictation-content">
                                <h4>Dictation 1</h4>
                                <p>Description of the dictation or a short snippet here.</p>
                            </div>
                            <Link href="#" className="btn">
                                Start Dictation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default DictationList