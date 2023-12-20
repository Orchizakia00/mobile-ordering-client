import { useLoaderData } from "react-router-dom";

const Home = () => {

    const mobiles = useLoaderData();
    console.log(mobiles);

    return (
        <div>
            <h2 className="text-center font-bold text-3xl">Our Mobiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:w-[90%] md:mx-auto">
                {
                    mobiles.map(mobile =>
                        <div key={mobile.id} className="card card-compact md:w-72 lg:w-96 bg-base-100 shadow-xl">
                            <figure><img src={mobile.image} alt="Shoes" className="w-[300px] h-[300px]" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{mobile.brand}</h2>
                                <h2 className="card-title">{mobile.mobile_name}</h2>
                                <div className="flex justify-between text-md">
                                    <div>
                                        <p className="mb-2"><span className="font-bold ">Price:</span> {mobile.type}</p>
                                        <p className="mb-2"><span className="font-bold ">Processor:</span> {mobile.processor}</p>
                                        <p className="mb-2"><span className="font-bold ">Operating System:</span> {mobile.OS}</p>
                                    </div>
                                    <div>
                                        <p className="mb-2"><span className="font-bold ">Memory:</span> {mobile.memory}</p>
                                        <p className="mb-2"><span className="font-bold ">Price:</span> ${mobile.price}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;