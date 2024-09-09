import { Link } from "react-router-dom"
import "./TopicList.css"
const TopicList = () => {
    return (
        <section className="all-topics">
            <div className="container">
                <h2>All Topics</h2>
                <div className="topics-grid">
                    {/* Topic Item 1 */}
                    <div className="topic-item">
                        <img
                            src="https://teachnouvelle.com/wp-content/uploads/2021/11/short-stories-for-secondary-ela-roundup-cover-1.jpg"
                            alt="Short Stories"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">Short Stories</Link>
                            </h3>
                            <p>
                                Level: <span className="level medium">Medium</span>
                            </p>
                            <p>290 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 2 */}
                    <div className="topic-item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwMVdAduWSBi0oeFUhsQ7WdZzplW9cV7KeQ&s"
                            alt="Conversations"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">Conversations</Link>
                            </h3>
                            <p>
                                Level: <span className="level medium">Medium</span>
                            </p>
                            <p>91 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 3 */}
                    <div className="topic-item">
                        <img
                            src="https://ischoolprep.com/blog/wp-content/uploads/2022/08/TOEFL-listening.png"
                            alt="TOEFL Listening"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">TOEFL Listening</Link>
                            </h3>
                            <p>
                                Level: <span className="level hard">Hard</span>
                            </p>
                            <p>305 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 4 */}
                    <div className="topic-item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTyGHfpnqFmYL8UYKloq8nQo2iIivQbZ3Fw&s"
                            alt="IELTS Listening"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">IELTS Listening</Link>
                            </h3>
                            <p>
                                Level: <span className="level hard">Hard</span>
                            </p>
                            <p>328 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 5 */}
                    <div className="topic-item">
                        <img
                            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                            alt="YouTube"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">YouTube</Link>
                            </h3>
                            <p>
                                Level: <span className="level hard">Hard</span>
                            </p>
                            <p>107 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 6 */}
                    <div className="topic-item">
                        <img
                            src="https://i.ytimg.com/vi/FfJ5XG5i2aw/maxresdefault.jpg"
                            alt="TED & TED-Ed"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">TED &amp; TED-Ed</Link>
                            </h3>
                            <p>
                                Level: <span className="level hard">Hard</span>
                            </p>
                            <p>27 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 7 */}
                    <div className="topic-item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxs5t5oHPpiNQWPjJHzwqSClqhWK8uhyaoA&s"
                            alt="IPA"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">IPA</Link>
                            </h3>
                            <p>
                                Level: <span className="level easy">Easy</span>
                            </p>
                            <p>42 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 8 */}
                    <div className="topic-item">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/007/920/162/small/digits-linear-modern-logo-all-numbers-in-line-strip-form-alphabet-number-character-and-number-linear-abstract-design-logo-corporate-identity-app-creative-poster-and-more-vector.jpg"
                            alt="Numbers"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">Numbers</Link>
                            </h3>
                            <p>
                                Level: <span className="level easy">Easy</span>
                            </p>
                            <p>9 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 9 */}
                    <div className="topic-item">
                        <img
                            src="https://www.shutterstock.com/image-vector/abstract-stylish-alphabet-be-bright-260nw-1729398772.jpg"
                            alt="Spelling Names"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">Spelling Names</Link>
                            </h3>
                            <p>
                                Level: <span className="level easy">Easy</span>
                            </p>
                            <p>6 lessons</p>
                        </div>
                    </div>
                    {/* Topic Item 10 */}
                    <div className="topic-item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCCBiYduIoK6ezGLUvHc5dupgSTsM4FlVZQ&s"
                            alt="English Expressions"
                        />
                        <div className="topic-info">
                            <h3>
                                <Link href="#">English Expressions</Link>
                            </h3>
                            <p>
                                Level: <span className="level medium">Medium</span>
                            </p>
                            <p>50 lessons</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default TopicList