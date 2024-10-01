import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { createUser } from "../../../services/userService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const passwordRegex = /^(?=.*[A-Z])[A-Za-z\d]{6,}$/;

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const { username, password, passwordConfirm } = data
            if (username === "" || password === "" || passwordConfirm === "") {
                toast("Vùi lòng nhập đủ trường !");
                return;
            }

            if (!passwordRegex.test(password)) {
                toast("Mật khẩu có ít nhất 6 ký tự và 1 chữa in hoa !");
                return;
            }
            if (password !== passwordConfirm) {
                toast("Mật khẩu không khớp !");
                return;
            }

            delete data.passwordConfirm;
            data.dob = "2001-11-19"
            data.bio = "hello bro"
            const result = await createUser(data);
            console.log(result);
            navigate("/login");
        } catch (error) {
            navigate("/register")
        }
    }
    return (
        <>
            <ToastContainer />
            <form className="form register-form" id="register-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <div className="input-group">
                    <label htmlFor="register-username">
                        <i className="fas fa-user" /> Username
                    </label>
                    <input
                        type="text"
                        id="register-username"
                        placeholder="Enter your username"
                        {...register("username")}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="register-password">
                        <i className="fas fa-lock" /> Password
                    </label>
                    <input
                        type="password"
                        id="register-password"
                        placeholder="Enter your password"
                        {...register("password")}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="register-confirm-password">
                        <i className="fas fa-lock" /> Confirm Password
                    </label>
                    <input
                        type="password"
                        id="register-confirm-password"
                        placeholder="Confirm your password"
                        {...register("passwordConfirm")}
                        required
                    />
                </div>
                <button type="submit" className="btn">
                    Register
                </button>
            </form>

        </>
    )
}
export default Register;