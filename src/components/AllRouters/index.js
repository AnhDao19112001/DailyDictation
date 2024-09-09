import routers from "../../routers";
import { useRoutes } from "react-router-dom";
const AllRouter = () => {
    const element = useRoutes(routers);
    return (
        <>
            {element}
        </>
    )
}
export default AllRouter;