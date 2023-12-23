import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const axios = useAxios();

    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axios.get('/cart');
            return res.data;
        }
    });

    return (
        <div className="min-h-screen">
            <h2 className="text-center font-bold text-3xl">My Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:w-[90%] md:mx-auto">
                {
                    cart.map(item => <CartItem key={cart._id} item={item}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Cart;