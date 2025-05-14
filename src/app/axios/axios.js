import apiClient from ".";
import toast from "react-hot-toast";



const getReq = async (path) => {
    try {
        const response = await apiClient.get(path)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        if (error?.message === 'timeout of 5000ms exceeded') {
            toast.error("Slow or no internet connection")
        }
    }
}

const postReq = async (path, data, form) => {
    try {
        const response = await apiClient.post(path, data, form)
        return response.data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        if (error?.message === 'timeout of 5000ms exceeded') {
            toast.error("Slow or no internet connection")
        } else if (error?.response?.data.message) {
            toast.error(error.message);
        }
    }
}

const deletReq = async (path) => {
    try {
        const response = await apiClient.delete(path)
        return response?.data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        if (error?.message) {
            toast.error(error?.message)
        }
    }
}

const putReq = async (path, data) => {
    try {
        const response = await apiClient.put(path, data)
        return response?.data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        if (error?.message) {
            toast.error(error?.message)
        }
    }
}


export { getReq, postReq, deletReq, putReq };