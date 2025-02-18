// import { motion } from "framer-motion";
// import React, {useEffect} from "react";

// const LoadingScreen = ({ setLoading }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, [setLoading]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transsition: { duration: 1 } }}
//     >
//       <div className="loading-screen">
//         <h1>로딩중</h1>
//       </div>
//     </motion.div>

//   )
// }

// export default LoadingScreen;