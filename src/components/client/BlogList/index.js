import { Link } from "react-router-dom"
import "./BlogList.css"
const BlogList = () => {
    return (
        <section className="blog">
            <div className="container">
                <h2>From Our Blog</h2>
                <div className="blog-list">
                    <div className="blog-item">
                        <div className="blog-icon">
                            <i className="fas fa-pencil-alt" />
                        </div>
                        <div className="blog-content">
                            <h4>How to Improve Your English with Dictation</h4>
                            <p>
                                Dictation exercises are an excellent way to improve your listening
                                skills. Learn how to get started with our tips and tricks.
                            </p>
                            <Link href="#" className="btn">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-icon">
                            <i className="fas fa-lightbulb" />
                        </div>
                        <div className="blog-content">
                            <h4>The Benefits of Daily Dictation Practice</h4>
                            <p>
                                Discover the long-term benefits of consistent dictation practice for
                                language learners of all levels.
                            </p>
                            <Link href="#" className="btn">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="blog-item">
                        <div className="blog-icon">
                            <i className="fas fa-graduation-cap" />
                        </div>
                        <div className="blog-content">
                            <h4>Advanced Dictation Techniques</h4>
                            <p>
                                Take your dictation skills to the next level with these advanced
                                techniques and strategies.
                            </p>
                            <Link href="#" className="btn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default BlogList