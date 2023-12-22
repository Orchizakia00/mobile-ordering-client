import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";

const MainLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    return (
        <div>
            <div className="w-[90%] md:w-full md:px-6 mx-auto mb-10">
                <Navbar onSearch={handleSearch} />
                <Home searchQuery={searchQuery} />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;