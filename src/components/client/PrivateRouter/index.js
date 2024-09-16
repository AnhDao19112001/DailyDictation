import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getCookie, deleteCookie } from "../../../helpers/cookie";
import { getUserByToken } from "../../../services/userService";
import { useEffect } from "react";
const PrivateRouter = () => {
    const token = getCookie("token");
    const navigate = useNavigate();
    const fetchApi = async () => {
        const checkUser = await getUserByToken(token);
        if (!checkUser.length) {
            deleteCookie("token")
            navigate("/login")
        }
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>
            {
                token ? <Outlet /> : <Navigate to="/login" />
            }
        </>
    )
}
export default PrivateRouter;