import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { checkUserExist, getUser } from "../../../services/userService"
import { ToastContainer, toast } from 'react-toastify'
import { authenClientFailure, authenClientSuccess } from "../../../actions/authentication"
import { setCookie } from "../../../helpers/cookie"
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"
// const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.authenReducerClient)
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [])
    const onSubmit = async (data) => {
        try {
            if (data.username === "") {
                toast("Vui lòng nhập tên !");
                return;
            }
            if (data.password === "") {
                toast("Vui lòng nhập mật khẩu !");
                return;
            }

            const result = await getUser(data);
            dispatch(authenClientSuccess(result.token));
            setCookie("id", result.user.id, 365)
            navigate("/")
        } catch (error) {
            navigate("/login")
        }
    }

    return (
        <>
            <ToastContainer />
            <form method="POST" className="form login-form active" id="login-form" onSubmit={handleSubmit(onSubmit)}>
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