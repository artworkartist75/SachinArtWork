import { useQuery } from "@tanstack/react-query";
import { getCollabData } from "../apiCalls/collabDataApi";


export const useGetCollab= ( ) => {
    return useQuery({
        queryKey: ["collab"],
        queryFn: () => getCollabData(),
        // enabled: !!artistId,
    });
}