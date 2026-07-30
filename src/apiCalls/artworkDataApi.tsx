import axios from 'axios';

export const getArtworkData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/artworks`);
    // console.log("artworks data -> ",res.data.data);
    return res.data.data;
}

export const getFeaturedArtwork = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/featuredArtwork`);
    // console.log("getFeaturedArtWork data -> ",res.data.data);
    return res.data.data;
}