import { useQuery } from "@tanstack/react-query";
import { getArtistData } from "../apiCalls/userDataApi";


export const useGetArtist = ( ) => {
    return useQuery({
        queryKey: ["artist"],
        queryFn: () => getArtistData(),
        // enabled: !!artistId,
    });
}