import { NavLink, Outlet } from "react-router-dom";
import "./LayoutLogin.css"
const LayoutLogin = () => {
    return (
        <>
            <div className="auth-body">
                <div className="auth-wrapper">
                    <div className="auth-container">
                        <div className="auth-box">
                            <div className="tabs">
                                <NavLink to="/login" className="tab-button" id="login-tab-button">
                                    <i className="fas fa-sign-in-alt" /> Login
                                </NavLink>
                                <NavLink to="/register" className="tab-button" id="register-tab-button">
                                    <i className="fas fa-user-plus" /> Register
                                </NavLink>
                            </div>
                            <div className="form-container">
                                <Outlet />
                            </div>
                            <div className="social-login">
                                <p>Or sign up with:</p>
                                <button className="btn-social google">
                                    <i className="fab fa-google"></i> Google
                                </button>
                                <button className="btn-social facebook">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LayoutLogin