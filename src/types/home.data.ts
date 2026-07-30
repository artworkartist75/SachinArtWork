export const mapInfo = (
    artistData: any[],
    artworkData: any[] = [],
    stats: any = {},
    collaborationData: any[] = [],
    ReviewData: any[] = []
) => {
    const artist = artistData?.[0];
    const socialLink = artist?.socialLinks;
    // console.log(stats?.subscriberCount)

    return {
        name: artist?.name || "",
        profession: artist?.profession || "",
        bio: artist?.bio || "",
        picture: artist?.profileImage?.[0]?.url || "",
        backgroundImage: artist?.coverImage?.[0]?.url || "",
        mobileNumber: artist?.phone,
        Email:artist?.email,
        featuredArtwork:artist?.featuredArtwork,
        whatsapplink:`https://wa.me/91${artist?.phone}?text=Hello%20I%20want%20to%20connect%20with%20you%20regarding%20your%20artwork.`,
        InstaUserName: "sachin_arts_7",
        instalink: socialLink?.instagram,
        facebooklink: "https://facebook.com/kapil.varma.923171",
        linkedinlink: socialLink?.linkedin,
        Youtubelink: socialLink?.youtube,

        artMilestones: [
            {
                title: "YouTube Subscribers",
                achievement: Number(stats?.subscriberCount || 0),
            },
            {
                title: "YouTube Reach",
                achievement: Number(stats?.viewCount || 0),
            },
            {
                title: "YouTube Videos",
                achievement: Number(stats?.videoCount || 0),
            },
            {
                title: "Instagram Followers",
                achievement: 10000,
            },
            {
                title: "Artwork Created",
                achievement: artworkData.length || 0,
            },
            {
                title: "Collaborations",
                achievement: collaborationData.length || 2,
            },
            {
                title: "Happy Clients",
                achievement: ReviewData.length || 15,
            },
            {
                title: "Years Experience",
                achievement: artist?.experience || 0,
            },
        ],
    };
};

export type ArtistInfo = ReturnType<typeof mapInfo>;