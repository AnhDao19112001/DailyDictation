import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { checkEmailExist, getUser } from "../../../services/userService"
import { ToastContainer, toast } from 'react-toastify'
import { checkAuthenClient } from "../../../actions/authentication"
import { getCookie, setCookie } from "../../../helpers/cookie"
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
            if (data.email === "") {
                toast("Vui lòng nhập email !");
                return;
            }
            if (!emailRegex.test(data.email)) {
                toast("Email không đúng định dạng !");
                return;
            }

            const result = await getUser(data);
            const emailExist = await checkEmailExist(data);
            if (emailExist.length && !result.length) {
                toast("Mật khẩu không chính xác !");
                return;
            }

            if (!result.length) {
                toast("Tài khoản không tồn tại !");
                return;
            }
            if (result.length) {
                dispatch(checkAuthenClient(result[0].token));
                setCookie("token", result[0].token, 1000);
                setCookie("id", result[0].id)
                navigate("/")
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
                    <label htmlFor="login-email">
                        <i className="fa-solid fa-envelope"></i> Emai
                    </label>
                    <input
                        type="text"
                        id="login-email"
                        placeholder="Enter your email"
                        {...register("email")}
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