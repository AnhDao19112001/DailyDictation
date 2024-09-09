import Home from "../pages/client/Home";
import AllExercies from "../pages/client/AllExercises";
import Stories from "../pages/client/Stories";
import Login from "../pages/client/Login";
import Register from "../pages/client/Register";
import LayoutClient from "../layouts/LayoutClient";
import LayoutLogin from "../layouts/LayoutLogin";
import ListenAndType from "../pages/client/Listen&Type";
const routers = [
    {
        path: "/",
        element: <LayoutClient />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-exercises",
                element: <AllExercies />,
            },
            {

                path: "/all-exercises/short-stories",
                element: <Stories />
            },
            {
                path: "/topic/short-stories/first-snowfall",
                element: <ListenAndType />
            }
        ]
    },
    {
        path: "/",
        element: <LayoutLogin />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]

export default routers;