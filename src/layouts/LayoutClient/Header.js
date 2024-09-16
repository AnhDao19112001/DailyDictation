import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { getCookie, deleteAllCookies } from "../../helpers/cookie";
const Header = () => {
    const authen = useSelector((state) => state.authenReducerClient);
    const [user, setUser] = useState({});
    const fetchApi = async () => {
        const dataUser = await getUserById(getCookie("id"));
        setUser(dataUser[0]);
    }
    useEffect(() => {
        fetchApi();
    }, [])
    const handleLogout = () => {
        deleteAllCookies();
    }
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
                            <Link to="/all-topics">All Exercises</Link>
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
                    {
                        authen ? (
                            <div className="info-user">
                                <Link to="/user/info" className="login-btn">
                                    <i className="fa-solid fa-user"></i>{user ? user.username : ""}
                                </Link>
                                <div className="drop-menu">
                                    <Link to="/user/info">User info</Link>
                                    <a href="/" onClick={handleLogout}>Log out</a>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="login-btn">
                                    Login
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </header>

    )
}

export default Header;