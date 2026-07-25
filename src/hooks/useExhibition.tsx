import { useQuery } from "@tanstack/react-query";
import { getExhibitionData } from "../apiCalls/exhibitionDataApi";


export const useGetExhibition = ( ) => {
    return useQuery({
        queryKey: ["exhibition"],
        queryFn: () => getExhibitionData(),
        // enabled: !!artistId,
    });
}