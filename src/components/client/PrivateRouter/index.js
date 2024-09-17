import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRouter = () => {
    const { isAuthenticated } = useSelector((state) => state.authenReducerClient);
    return (
        <>
            {
                isAuthenticated ? <Outlet /> : <Navigate to="/login" />
            }
        </>
    )
}
export default PrivateRouter;