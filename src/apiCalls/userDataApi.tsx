import axios from 'axios';

export const getArtistData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/artistDetails`);
    // console.log("artist data -> ",res.data.data);
    return res.data.data;
}