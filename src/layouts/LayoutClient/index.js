import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./LayoutClient.css"
const LayoutClient = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default LayoutClient;