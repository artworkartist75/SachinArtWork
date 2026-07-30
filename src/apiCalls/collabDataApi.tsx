import axios from 'axios';

export const getCollabData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/collaborations`);
    // console.log("collaborations data -> ",res.data.data);
    return res.data.data;
}