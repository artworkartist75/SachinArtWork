import { useState } from 'react';
import '../index.css';
import FeaturedWorks from '../layouts/Featured';
import ContactPopup from '../layouts/ContactPopup';
import socialMedia from '../data/socialMedia';
import ClientReviews from '../layouts/reviewClient';
import ArtServices from '../layouts/Services';

function Home() {

    const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-5 md:px-16 py-10 overflow-hidden">
      
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
            <p className="uppercase tracking-[5px] text-gray-400 text-sm">
                Freelance Artist
            </p>

            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                SKETCHES, PAINTINGS & DIGITAL ARTWORK
            </h1>

            <p className="text-gray-400 max-w-lg leading-7">
                Hi, I'm Kapil, a passionate artist focused on realistic
                sketches, creative paintings, and modern digital artwork
                that brings imagination to life.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5">
                <button className="bg-orange-500 hover:bg-orange-600 text-[1rem] px-2 py-1 md:px-6 md:py-3 rounded-lg font-semibold transition duration-300">
                Explore Art ↗
                </button>

                <button
                 onClick={() => setOpenPopup(true)}
                // window.open(
                //     "https://wa.me/916264990928?text=Hello%20I%20want%20to%20connect%20with%20you%20regarding%20your%20artwork.",
                //     "_blank"
                // )
                className="border border-gray-600 hover:border-white text-[1rem] px-2 py-1 md:px-6 md:py-3 rounded-lg font-semibold transition duration-300"
                >
                Contact Me
                </button>
            </div>

            {/* Art Types */}
            <div className="flex flex-wrap items-center gap-6 pt-8 text-gray-500 font-semibold">
                <span>Portrait Sketch</span>
                <span>Canvas Painting</span>
                <span>Digital Art</span>
                <span>Custom Artwork</span>
            </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
            
            {/* Glow Effect */}
            <div className="absolute w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full"></div>

            {/* Main Card */}
            <div className="relative border border-gray-800 bg-[#111] rounded-3xl overflow-hidden shadow-2xl">
                <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt="Artist"
                className="w-full md:w-[500px] h-[550px] object-cover"
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