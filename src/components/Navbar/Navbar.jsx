import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Order Mobile</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <button className="btn btn-ghost"><FaSearch size={30}></FaSearch></button>
            </div>
        </div>
    );
};

export default Navbar;