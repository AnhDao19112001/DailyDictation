import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { checkUserExist, getUser } from "../../../services/userService"
import { ToastContainer, toast } from 'react-toastify'
import { authenClientFailure, authenClientSuccess } from "../../../actions/authentication"
import { getCookie, setCookie } from "../../../helpers/cookie"
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"
// const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (getCookie("token")) {
            navigate('/')
        }
    }, [])
    const onSubmit = async (data) => {
        try {
            if (data.username === "") {
                toast("Vui lòng nhập tên !");
                return;
            }


            const result = await getUser(data);
            const userExist = await checkUserExist(data);
            if (userExist.length && !result.length) {
                toast("Tài khoản không tồn tại !");
                return;
            }
            if (result.length) {
                dispatch(authenClientSuccess(result[0]));
                setCookie("token", result[0].token);
                navigate("/")
            } else {
                dispatch(authenClientFailure());
            }
        } catch (error) {
            navigate("/login")
        }
    }
    return (
        <>
            <ToastContainer />
            <form className="form login-form active" id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="login-username">
                        <i className="fa-solid fa-user"></i> Username
                    </label>
                    <input
                        type="text"
                        id="login-username"
                        placeholder="Enter your email"
                        {...register("username")}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="login-password">
                        <i className="fas fa-lock" /> Password
                    </label>
                    <input
                        type="password"
                        id="login-password"
                        placeholder="Enter your password"
                        {...register("password")}
                        required
                    />
                </div>
                <button type="submit" className="btn">
                    Login
                </button>
            </form>
        </>
    )
}
export default Login;