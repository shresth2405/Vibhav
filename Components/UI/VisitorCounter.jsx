"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getVisitors() {
      try {
        const res = await fetch("/api/visit"); // ✅ changed here
        const data = await res.json();
        setCount(data.value); // same structure
      } catch (err) {
        console.log(err);
      }
    }

    getVisitors();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center mt-6"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative px-10 py-6 rounded-2xl 
        border border-indigo-900/40
        bg-gradient-to-br from-blue-500/10 to-purple-500/10
        backdrop-blur-lg
        shadow-[0_0_20px_rgba(59,130,246,0.6)]"
      >

        <div className="absolute inset-0 rounded-2xl 
        border border-indigo-900/40
        shadow-[0_0_25px_rgba(49,46,129,0.9)]
        pointer-events-none"></div>

        <div className="relative text-center">

          <motion.h2
            key={count}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold 
            bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 
            bg-clip-text text-transparent"
          >
            {count}
          </motion.h2>

          <p className="text-sm text-gray-300 mt-1 tracking-wide">
            People explored <span className="text-blue-400">Vibhav</span>
          </p>

        </div>
      </motion.div>
    </motion.div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function VisitorCounter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     async function getVisitors() {
//       try {
//         const res = await fetch(
//           "https://api.countapi.xyz/hit/vibhav-nitham/visits"
//         );
//         const data = await res.json();
//         setCount(data.value);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     getVisitors();
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="flex justify-center mt-6"
//     >
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="relative px-10 py-6 rounded-2xl 
//         // border border-blue-400/30 
//         border border-indigo-900/40
//         bg-gradient-to-br from-blue-500/10 to-purple-500/10
//         backdrop-blur-lg
//         shadow-[0_0_20px_rgba(59,130,246,0.6)]"
//       >

        
//         <div className="absolute inset-0 rounded-2xl 
//         // border border-blue-400/40
//         border border-indigo-900/40
//         // shadow-[0_0_25px_rgba(59,130,246,0.8)]
//         shadow-[0_0_25px_rgba(49,46,129,0.9)]
//         pointer-events-none"></div>

//         <div className="relative text-center">

//           <motion.h2
//             key={count}
//             initial={{ scale: 0.6, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl font-extrabold 
//             bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 
//             bg-clip-text text-transparent"
//           >
//             {count}
//           </motion.h2>

//           <p className="text-sm text-gray-300 mt-1 tracking-wide">
//             People explored <span className="text-blue-400">Vibhav</span>
//           </p>

//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }
