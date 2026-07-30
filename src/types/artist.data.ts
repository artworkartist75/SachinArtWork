export const mapArtistInfo = (
    artistData: any[],
    artworkData: any[] = [],
    collaborationData: any[] = []
) => {
    const artist = artistData?.[0];
    const socialLink = artist?.socialLinks;

    return {
        name: artist?.name || "",
        profession: artist?.profession || "",
        bio: artist?.bio || "",
        stats: {
            artworksCreated: artworkData.length,
            happyClients: collaborationData.length ==0 ? 15: 0,
            yearsExperience: artist?.experience || 0,
        },
        instalink: socialLink?.instagram,
        facebooklink: "https://facebook.com/kapil.varma.923171",
        linkedinlink: socialLink?.linkedin,
        Youtubelink: socialLink?.youtube,
        picture: artist?.profileImage?.[0]?.url || "",
        backgroundImage: artistData?.[0]?.coverImage?.[0]?.url || "",
    };
};