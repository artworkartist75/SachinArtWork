import collaborations from "../data/collaboration";

function collabrationInfo() {
  return (
    <>
        {/* Collaborations Section */}
        <section className="pt-24">

            <div className="text-center mb-16">

                <p className="uppercase tracking-[4px] text-orange-500 text-sm">
                Collaborations
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Brands & Creative Collaborations
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
                Worked with creators, art communities, and digital brands
                to deliver unique and engaging artwork experiences.
                </p>

                <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
            </div>

            {/* Collaboration Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {
                    collaborations.map((collab, index) => (
                        <div
                            key={index}
                            className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {collab.title}
                            </h3>
                            <p className="text-gray-400 leading-7">
                                {collab.description}
                            </p>
                        </div>
                    ))
                }

            </div>
        </section>
    </>
    )
}

export default collabrationInfo