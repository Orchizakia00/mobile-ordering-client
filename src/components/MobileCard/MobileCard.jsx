/* eslint-disable react/prop-types */

import { FaCartPlus } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const MobileCard = ({ mobile }) => {
    const axios = useAxios();

    const handleCart = (mobile) => {
        const cartItem = {
            cartId: mobile._id,
            mobile_name: mobile.mobile_name,
            brand: mobile.brand,
            type: mobile.type,
            processor: mobile.processor,
            memory: mobile.memory,
            price: mobile.price,
            OS: mobile.OS,
            image: mobile.image,
        }

        axios.post('/cart', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success(`${mobile.mobile_name} Added to Cart Successfully!`)
                }
            })

            .catch(err => console.log(err))
    }

    return (
        <div className="card card-compact md:w-72 lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={mobile.image} alt="Shoes" className="w-[300px] h-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{mobile.brand}</h2>
                <h2 className="card-title">{mobile.mobile_name}</h2>
                <div className="flex justify-between text-md">
                    <div>
                        <p className="mb-2"><span className="font-bold ">Type:</span> {mobile.type}</p>
                        <p className="mb-2"><span className="font-bold ">Processor:</span> {mobile.processor}</p>
                        <p className="mb-2"><span className="font-bold ">Operating System:</span> {mobile.OS}</p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-bold ">Memory:</span> {mobile.memory}</p>
                        <p className="mb-2"><span className="font-bold ">Price:</span> ${mobile.price}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleCart(mobile)} className="btn btn-accent hover:btn-ghost">Add To Cart <FaCartPlus></FaCartPlus></button>
                </div>
            </div>
        </div>
    );
};

export default MobileCard;