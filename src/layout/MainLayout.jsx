import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="w-[90%] md:w-full md:px-6 mx-auto mb-10">
                <Navbar />
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;