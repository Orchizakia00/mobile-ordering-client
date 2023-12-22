import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mobile-ordering-application-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;