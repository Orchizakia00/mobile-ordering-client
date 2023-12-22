/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import MobileCard from "../components/MobileCard/MobileCard";
import useAxios from "../hooks/useAxios";

const Home = ({ searchQuery }) => {
    const axios = useAxios();

    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            const res = await axios.get('/mobiles');
            return res.data;
        }
    });
    console.log(mobiles);

    const filteredMobiles = mobiles.filter(
        (mobile) =>
            mobile.mobile_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mobile.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mobile.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mobile.processor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mobile.OS.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mobile.price.toString().includes(searchQuery.toLowerCase())
        // Add more conditions for other properties if needed
    );

    return (
        <div>
            <h2 className="text-center font-bold text-3xl">Our Mobiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:w-[90%] md:mx-auto">
                {
                    filteredMobiles.map(mobile =>
                        <MobileCard key={mobile.id} mobile={mobile}></MobileCard>)
                }
            </div>
        </div>
    );
};

export default Home;