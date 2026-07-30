// import React from "react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
//       <div className="flex flex-col items-center gap-5">
//         <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

//         <h2 className="text-white text-base sm:text-xl font-semibold tracking-wide">
//           Loading...
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Loader;


const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#090909] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-orange-500 opacity-20"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 animate-spin"></div>
        </div>

        <h1 className="mt-6 text-white text-lg sm:text-2xl font-bold">
          Sachin Artwork
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Preparing beautiful artwork...
        </p>
      </div>
    </div>
  );
};

export default Loader;