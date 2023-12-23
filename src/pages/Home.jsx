/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import MobileCard from "../components/MobileCard/MobileCard";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Banner from "../components/Banner/Banner";

const Home = () => {
    const axios = useAxios();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMobiles, setFilteredMobiles] = useState([]);

    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await axios.get('/mobiles');
            return res.data;
        }
    });


    const handleSearch = () => {
        const filtered = mobiles.filter(
            (mobile) =>
                mobile.mobile_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mobile.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mobile.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mobile.processor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mobile.OS.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mobile.price.toString().includes(searchQuery.toLowerCase())
            // Add more conditions for other properties if needed
        );
        setFilteredMobiles(filtered);
    };

    return (
        <div>
            <Banner />
            <h2 className="text-center font-bold text-3xl mt-16">Our Mobiles</h2>
            <div className="flex gap-2 justify-end mr-24 my-10">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <button onClick={handleSearch} className="btn btn-ghost"><FaSearch size={30}></FaSearch></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:w-[90%] md:mx-auto">
                {searchQuery === "" ? (
                    mobiles.map((mobile) => (
                        <MobileCard key={mobile._id} mobile={mobile}></MobileCard>
                    ))
                ) : (
                    filteredMobiles.map((mobile) => (
                        <MobileCard key={mobile._id} mobile={mobile}></MobileCard>
                    ))
                )}
            </div>

        </div>
    );
};

export default Home;