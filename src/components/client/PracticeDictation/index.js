import "./PracticeDictation.css"
const PracticeDictation = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <h2>How practicing dictation will improve your English skills?</h2>
                <p className="subheading">
                    When practicing exercises at dailydictation.com, you will go through 4
                    main steps, all of them are equally important!
                </p>
                <div className="steps">
                    <div className="step">
                        <i className="fas fa-headphones-alt" />
                        <h3>1. Listen to the audio</h3>
                        <p>
                            Through the exercises, you will have to listen a lot; that's the key
                            to improving your listening skills in any learning method.
                        </p>
                    </div>
                    <div className="step">
                        <i className="fas fa-keyboard" />
                        <h3>2. Type what you hear</h3>
                        <p>
                            Typing what you hear forces you to focus on every detail which helps
                            you become better at pronunciation, spelling and writing.
                        </p>
                    </div>
                    <div className="step">
                        <i className="fas fa-check-double" />
                        <h3>3. Check your answers</h3>
                        <p>
                            Compare your results with the correct text to understand your mistakes
                            and learn from them.
                        </p>
                    </div>
                    <div className="step">
                        <i className="fas fa-repeat" />
                        <h3>4. Practice regularly</h3>
                        <p>
                            Regular practice is essential to master any language. Keep practicing
                            and improving your skills every day!
                        </p>
                    </div>
                </div>
            </div>
        </section>


    )
}
export default PracticeDictation;