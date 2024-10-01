import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie } from "../../helpers/cookie";
import { authenClientFailure } from "../../actions/authentication";
import { useEffect, useRef, useState } from "react";
import { getUserById } from "../../services/userService";
const Header = () => {
    const auth = useSelector((state) => state.authenReducerClient);
    const dispatch = useDispatch();
    const handleLogout = () => {
        deleteCookie("id");
        localStorage.removeItem('token');
        dispatch(authenClientFailure(""));
    }
    const [user, setUser] = useState({});
    const fetchApi = async () => {
        const getUser = await getUserById(getCookie("id"));
        setUser(getUser.users);
    }
    const menuRef = useRef(null);
    useEffect(() => {
        if (auth) {
            fetchApi();
        }
    }, []);
    const handleShowMenu = () => {
        // setIsShowMenu(!isShowMenu);
        console.log(menuRef.current);
        menuRef.current.classList.toggle('d-block')
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
                        auth ? (
                            <div className="info-user">
                                <Link to="/user/info" className="login-btn">
                                    <i className="fa-solid fa-user"></i>{user ? user.username : ""}
                                </Link>
                                <div className="drop-menu">
                                    <Link to="/user/info">User info</Link>
                                    <Link to="/" onClick={handleLogout}>Log out</Link>
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
                <div className="icon-bar-header" onClick={handleShowMenu} >
                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>
            {/* {
                isShowMenu ? (
                    <> */}
            <nav className="main-nav-drop-down" ref={menuRef}>
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
                    <li>
                        <Link className="user-info">{user ? user.username : ""}</Link>
                        <div className="drop-menu">
                            <Link to="/user/info">User info</Link>
                            <Link to="/" onClick={handleLogout}>Log out</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            {/* </>
                ) : (
                    <></>
                )
            } */}
        </header>

    )
}

export default Header;