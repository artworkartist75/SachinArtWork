import { useState } from 'react';
import '../index.css';
import FeaturedWorks from '../layouts/Featured';
import ContactPopup from '../layouts/ContactPopup';
import socialMedia from '../data/socialMedia';
import ClientReviews from '../layouts/reviewClient';
import ArtServices from '../layouts/Services';
import { useGetArtist } from '../hooks/useArtist';
import { useGetArtwork } from '../hooks/useArtwork';
// import { mapArtistInfo } from '../types/artist.data';
import { mapInfo } from '../types/home.data';

function Home() {

const [openPopup, setOpenPopup] = useState(false);
const [showFullBio, setShowFullBio] = useState(false);
const { data: artistData, isLoading:artistLoading } = useGetArtist();
const { data: artWorkData, isLoading:artworkLoading } = useGetArtwork();

  console.log(artistData);
  if (
    artistLoading 
    || artworkLoading
    //|| collabLoading
  ) {
    return <h2>Loading...</h2>;
  }

  const artistInfo = mapInfo(
    artistData,
    artWorkData,
    // reviewData
  );

  const artType = [
      "Custom Artwork",
    "Portrait Sketch",
    "Canvas Painting",
    "Digital art",
  ];


  const bio = artistInfo.bio || "";
  const maxLength = 300;
  const isLongBio = bio.length > maxLength;

return (
    <div className="min-h-screen bg-black text-white ">//px-5 md:px-16 py-20 overflow-hidden

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-1 items-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `
                linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)),
                url(${artistInfo.backgroundImage})
                `,
                backgroundAttachment:"fixed"
            }}
        >
            
            {/* Left Content */}
            <div className="space-y-6 max-w-7xl mx-auto px-5 md:px-16 py-20  min-h-[80vh]">
                <p className="uppercase tracking-[5px] text-sm text-orange-500">
                    Freelance Artist
                </p>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    SKETCHES, PAINTINGS & DIGITAL ARTWORK
                </h1>

                <p className="text-gray-200 max-w-lg leading-7 text-[1rem]">
                    {/* Hi, I'm Kapil, a passionate artist focused on realistic
                    sketches, creative paintings, and modern digital artwork
                    that brings imagination to life. */}
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

                {/* Buttons */}
                <div className="flex items-center gap-5">
                    <button className="bg-orange-500 hover:bg-orange-600 text-[1rem] px-2 py-1 md:px-6 md:py-3 rounded-lg font-semibold transition duration-300">
                    Explore Art ↗
                    </button>

                    <button
                    onClick={() => setOpenPopup(true)}
                    className="border border-gray-600 hover:border-white text-[1rem] px-2 py-1 md:px-6 md:py-3 rounded-lg font-semibold transition duration-300"
                    >
                    Contact Me
                    </button>
                </div>

                {/* Art Types */}
                <div className="flex flex-wrap items-center gap-2 pt-4 text-white font-semibold">
                    {
                        artType.map((art,index) => (
                            <span 
                                key={index} 
                                className="border px-3 py-1 rounded-lg font-semibold hover:border-white transition duration-300"
                            > 
                             {art}
                            </span>
                        ))
                    }    
                </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
            
            {/* Glow Effect */}
            <div className="absolute w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full"></div>

            {/* Main Card */}
            <div className="relative border border-gray-800 bg-[#111] rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src={artistInfo.picture}
                    alt="Artist"
                    className="w-full md:w-[500px] h-[540px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Quote Card */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-gray-700 rounded-2xl px-5 py-4 max-w-[280px]">
                <p className="text-gray-300 text-sm leading-6">
                    “Art speaks where words are unable to explain.”
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Featured Works Section */}
        <FeaturedWorks/>

        {/* Client Reviews Section */}
        <ClientReviews/>

        {/* Services Section */}
        <ArtServices/>

        {/* Achievements Section */}
        <section className="pt-24">

            <div className="text-center mb-16">

                <p className="uppercase tracking-[4px] text-orange-500 text-sm">
                Achievements
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Artistic Milestones
                </h2>

                <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {
                    socialMedia.artMilestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="bg-[#111] border border-gray-800 rounded-3xl p-6 text-center hover:border-orange-500 transition duration-300"
                        >
                            <h2 className="text-4xl font-bold text-orange-500">
                                {milestone.achievement}
                            </h2>
                            <p className="text-gray-400 mt-3">
                                {milestone.title}
                            </p>
                        </div>
                    ))
                }

            </div>
        </section>

        <ContactPopup
            open={openPopup}
            setOpen={setOpenPopup}
        />
    </div>
  );
}

export default Home;