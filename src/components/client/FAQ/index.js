import { Link } from "react-router-dom";
import "./FAQ.css"
const FAQ = () => {
    return (
        <section className="faq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-columns">
                    <div className="faq-column">
                        <h3>Is this program free?</h3>
                        <p>Yes, it's 100% FREE!</p>
                    </div>
                    <div className="faq-column">
                        <h3>Is this website for beginners?</h3>
                        <p>
                            As long as you can understand this page, you're good to go! But it's
                            better if you know basic English pronunciation, if you don't, watch
                            this <Link href="#">YouTube series</Link>.
                        </p>
                    </div>
                    <div className="faq-column">
                        <h3>How long will it take to become fluent with this website?</h3>
                        <p>
                            It depends on many things (such as your current level, how many hours
                            you will spend each day). I can only say that your English will
                            improve very quickly with this method.
                        </p>
                    </div>
                    <div className="faq-column">
                        <h3>Will my speaking skills improve using this method?</h3>
                        <p>
                            Speaking and listening skills are related together, once you have
                            better listening skills, it's much easier and faster to improve your
                            speaking skills. Also, you can try to read out loud what you hear,
                            your skills will improve really quickly!
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default FAQ;