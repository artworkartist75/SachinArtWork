export const mapMedia = (
    artistData: any[],
) => {
    const artist = artistData?.[0];
    const socialLink = artist?.socialLinks;

    return{
        whatsapplink:`https://wa.me/91${artist?.phone}?text=Hello%20I%20want%20to%20connect%20with%20you%20regarding%20your%20artwork.`,
        InstaUserName: "sachin_arts_7",
        instalink: socialLink?.instagram,
        facebooklink: "https://facebook.com/kapil.varma.923171",
        linkedinlink: socialLink?.linkedin,
        Youtubelink: socialLink?.youtube,
        Email:artist?.email,
        mobileNumber: "91"+`${artist?.phone}`,
    }
}