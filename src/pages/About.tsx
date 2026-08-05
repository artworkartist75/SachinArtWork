import { useState } from "react";
import { useGetArtist } from "../hooks/useArtist";
import { useGetArtwork } from "../hooks/useArtwork";
import collabrationInfo from "../layouts/collabrationInfo";
import { mapArtistInfo } from "../types/artist.data";
import SEO from "../services/SEO";
import { websiteJsonLdAboutPage } from "../services/JSON-LD";
import Loader from "../layouts/Loader";
import { useTheme as useAppTheme } from "../ThemeContext";
import { skill } from "../data/skill";

function About() {
  const { data: artistData, isLoading:artistLoading } = useGetArtist();
  const { data: artWorkData, isLoading:artworkLoading } = useGetArtwork();
  const { theme } = useAppTheme();
  const isDark = theme === "dark";
  // const { data: collabData, isLoading:collabLoading } = useGetCollab();
  const [showFullBio, setShowFullBio] = useState(false);

  // console.log(artistData);
  if (
    artistLoading 
    || artworkLoading
    //|| collabLoading
  ) {
    return <Loader/>;
  }

  const artistInfo = mapArtistInfo(
    artistData,
    artWorkData,
    // collaborationData
  );

  const JsonLdAboout = websiteJsonLdAboutPage(artistInfo);

  const bio = artistInfo.bio || "";
  const maxLength = 400;
  const isLongBio = bio.length > maxLength;

  return (
    <>
      <SEO
        title="About Artist | Sachin Artwork"
        description="Know more about artist Sachin, his artistic journey, exhibitions, collaborations and creative vision."
        keywords="Sachin artist, sachinartist, artist, Sachin Artwork, About Artist, Sachin Artwork, Artist Biography"
        url="https://sachinartwork.vercel.app/about"
        jsonLd={JsonLdAboout}
      />
      <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        // className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            ${isDark ? "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))" : "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.84))"},
            url(${artistInfo.backgroundImage})
          `,
          backgroundAttachment:"fixed"
        }}
        >

          {/* Left Content */}
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-20  min-h-[80vh] ">

            <p className="uppercase tracking-[4px] text-orange-500 text-sm mb-4">
              About Artist
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Turning Imagination <br />
              Into Artwork
            </h1>

            <p className={`leading-7 text-sm md:text-base mb-6 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
              {/* Hi, I'm Kapil — a passionate sketch artist and digital creator
              focused on creating emotional, realistic, and visually engaging
              artworks. My work combines creativity, storytelling, and artistic
              details to transform ideas into meaningful art pieces. */}
              {showFullBio || !isLongBio
                ? bio
                : `${bio.slice(0, maxLength)}...`}

              {isLongBio && (
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="ml-2 text-orange-500 hover:text-orange-400 font-semibold"
                >
                  {showFullBio ? "Show Less" : "Read More"}
                </button>
              )}
            </p>

            {/* <p className="text-gray-400 leading-7 text-sm md:text-base mb-8">
              From handmade pencil sketches to modern digital illustrations,
              every artwork reflects dedication, patience, and artistic vision.
              I love exploring different styles and bringing unique concepts to life.
            </p> */}

            {/* Stats */}
            <div className="flex flex-wrap gap-6">

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  {artistInfo.stats.artworksCreated}+
                </h2>

                <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Artworks Created
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  {artistInfo.stats.happyClients}+
                </h2>

                <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Happy Clients
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  {artistInfo.stats.yearsExperience}+
                </h2>

                <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Years Experience
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full"></div>

            {/* Image */}
            <div className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-gray-800" : "border-gray-300"}`}>
              <img
                src={artistInfo.picture}
                alt="Artist"
                className="w-full md:w-[500px] h-[550px] object-cover"
              />
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="pt-24">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold">
              Artistic Skills
            </h2>

            <p className={`mt-5 max-w-2xl mx-auto leading-7 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Specialized in creating realistic sketches, creative paintings,
              and modern digital artwork with attention to every detail.
            </p>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 sm:px-3 md:px-6">
            
            {
              skill.map((skill, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-6 text-center hover:border-orange-500 transition duration-300 ${isDark ? "bg-[#111] border border-gray-800" : "bg-white border border-gray-300"}`}
                >
                  <div className="text-5xl mb-5">{skill.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
                  <p className={`text-sm leading-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {skill.description}
                  </p>
                </div>
              ))  
            }

          </div>
        </section>

        
        {/* Collaborations Section */}
        {collabrationInfo()}

        {/* Quote Section */}
        <section className="pt-24 p-2">

          <div className={`rounded-3xl p-10 md:p-16 text-center ${isDark ? "bg-[#111] border border-gray-800" : "bg-white border border-gray-300"}`}>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              “Art is not what you see, <br />
              but what you make others see.”
            </h2>

            <p className="text-orange-500 mt-6 text-lg">
              — Edgar Degas
            </p>
          </div>

        </section>

      </div>
    </>
  );
}

export default About;