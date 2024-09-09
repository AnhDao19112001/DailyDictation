import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <i className="fas fa-book-open" />
                    <h1>Daily Dictation</h1>
                </Link>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/web-learn-englishall-exercises">All Exercises</Link>
                        </li>
                        <li>
                            <Link href="#">Top Users</Link>
                        </li>
                        <li>
                            <Link href="#">Video Lessons</Link>
                        </li>
                        <li>
                            <Link href="#">Help Me</Link>
                        </li>
                    </ul>
                </nav>
                <div className="login-nav">
                    <Link to="/login" className="login-btn">
                        Login
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Header;