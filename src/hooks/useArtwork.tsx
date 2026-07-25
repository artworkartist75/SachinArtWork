import { useQuery } from "@tanstack/react-query";
import { getArtworkData, getFeaturedArtwork } from "../apiCalls/artworkDataApi";


export const useGetArtwork = ( ) => {
    return useQuery({
        queryKey: ["artwork"],
        queryFn: () => getArtworkData(),
        // enabled: !!artistId,
    });
}

export const useFeatureArtwork = ( ) => {
    return useQuery({
        queryKey: ["featuredArtwork"],
        queryFn: () => getFeaturedArtwork(),
        // enabled: !!artistId,
    });
}