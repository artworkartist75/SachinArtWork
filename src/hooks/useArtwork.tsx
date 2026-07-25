import { useQuery } from "@tanstack/react-query";
import { getArtworkData } from "../apiCalls/artworkDataApi";


export const useGetArtwork = ( ) => {
    return useQuery({
        queryKey: ["artwork"],
        queryFn: () => getArtworkData(),
        // enabled: !!artistId,
    });
}