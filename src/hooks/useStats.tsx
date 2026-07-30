import { useQuery } from "@tanstack/react-query"
import { getStatsData } from "../apiCalls/statsApi"

export const useYoutubeStats = () => {
    return useQuery({
        queryKey:["youTube/stats"],
        queryFn: () => getStatsData()
    });
}