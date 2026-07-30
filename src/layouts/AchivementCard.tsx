// import { useYoutubeStats } from "../hooks/useStats";
// import CountUp from "react-countup";

// export const AchivementCard = () => {
//     const { data: stats, isLoading:statsLoading } = useYoutubeStats();
//     if ( statsLoading ) {
//         return <h2>Loading...</h2>;
//     }
//     return (
//         <section className="pt-24">

//             <div className="text-center mb-16">

//                 <p className="uppercase tracking-[4px] text-orange-500 text-sm">
//                 Achievements
//                 </p>

//                 <h2 className="text-4xl md:text-5xl font-bold mt-4">
//                 Artistic Milestones
//                 </h2>

//                 <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
//             </div>

//             {/* Achievement Cards */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

//                         <h2 className="text-4xl font-bold text-orange-500">
                            
//                             <CountUp end={500} />
                            
//                             +
//                         </h2>
//             </div>
//         </section>
//     );
// } 