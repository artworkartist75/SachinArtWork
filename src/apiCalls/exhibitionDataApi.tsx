import axios from 'axios';

export const getExhibitionData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/exhibitions`);
    console.log("exhibitions data -> ",res.data.data);
    return res.data.data;
}