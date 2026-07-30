import axios from 'axios';

export const getStatsData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/stats`);
    console.log(" data -> ",res.data);
    return res.data;
}