import collaborations from "../data/collaboration";
import { useTheme as useAppTheme } from "../ThemeContext";

function collabrationInfo() {
  const { theme } = useAppTheme();
  const isDark = theme === "dark";
  return (
    <>
        {/* Collaborations Section */}
        <section className="pt-24 p-2">

            <div className="text-center mb-16">

                <p className="uppercase tracking-[4px] text-orange-500 text-sm">
                Collaborations
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Brands & Creative Collaborations
                </h2>

                <p className={`max-w-2xl mx-auto mt-6 leading-7 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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
                            className={`rounded-3xl p-8 hover:border-orange-500 transition duration-300 ${isDark ? "bg-[#111] border border-gray-800" : "bg-white border border-gray-300"}`}
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {collab.title}
                            </h3>
                            <p className={`leading-7 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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