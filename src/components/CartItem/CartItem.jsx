/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const CartItem = ({ item }) => {
    const axios = useAxios();
    const { refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axios.get('/cart');
            return res.data;
        }
    });

    const handleDelete = item => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to fire?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axios.delete(`/cart/${item._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.deletedCount > 0) {
                                        refetch();
                                        toast.success(`Item Deleted Successfully!`)
                                    }
                                })
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div className="card card-compact md:w-72 lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" className="w-[300px] h-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.brand}</h2>
                <h2 className="card-title">{item.mobile_name}</h2>
                <div className="flex justify-between text-md">
                    <div>
                        <p className="mb-2"><span className="font-bold ">Type:</span> {item.type}</p>
                        <p className="mb-2"><span className="font-bold ">Processor:</span> {item.processor}</p>
                        <p className="mb-2"><span className="font-bold ">Operating System:</span> {item.OS}</p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-bold ">Memory:</span> {item.memory}</p>
                        <p className="mb-2"><span className="font-bold ">Price:</span> ${item.price}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(item)} className="btn btn-error hover:btn-ghost">Delete <FaTrashAlt></FaTrashAlt></button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;