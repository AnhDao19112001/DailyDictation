import "./Introduction.css"
const Introduction = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro-content">
                    <div className="intro-icon">
                        <i className="fas fa-headphones-alt" />
                    </div>
                    <h2>Improve Your Listening Skills</h2>
                    <p>
                        Practice English dictation daily to improve your listening and
                        comprehension skills.
                    </p>
                    <a href="#dictations" className="btn-main">
                        Get Started
                    </a>
                </div>
            </div>
            <div className="intro-shapes">
                <div className="shape shape1" />
                <div className="shape shape2" />
                <div className="shape shape3" />
            </div>
        </section>
    )
}
export default Introduction