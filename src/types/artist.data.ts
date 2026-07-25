export const mapArtistInfo = (
    artistData: any[],
    artworkData: any[] = [],
    collaborationData: any[] = []
) => {
    const artist = artistData?.[0];

    return {
        name: artist?.name || "",
        profession: artist?.profession || "",
        bio: artist?.bio || "",
        stats: {
            artworksCreated: artworkData.length,
            happyClients: collaborationData.length ==0 ? 15: 0,
            yearsExperience: artist?.experience || 0,
        },
        picture: artist?.profileImage?.[0]?.url || "",
        backgroundImage: artistData?.[0]?.coverImage?.[0]?.url || "",
    };
};