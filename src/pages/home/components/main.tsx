import { useEffect, useRef, useState } from "react";
import Walpaper from "../../../assets/images/walpaper1.png";

// export const MainSection = () => {
//   const textRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [transform, setTransform] = useState(
//     "perspective(500px) rotateY(6.5deg)"
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (textRef.current) {
//       observer.observe(textRef.current);
//     }

//     return () => {
//       if (textRef.current) {
//         observer.unobserve(textRef.current);
//       }
//     };
//   }, []);

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLImageElement, MouseEvent>
//   ) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     const dx = (x / width - 0.5) * 2;
//     const dy = (y / height - 0.5) * 2;

//     const rotateX = dy * 10;
//     const rotateY = dx * 10;
//     const scale = 1 + 0.05 * (Math.abs(dx) + Math.abs(dy));

//     setTransform(
//       `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
//     );
//   };

//   const handleMouseLeave = () => {
//     setTransform("perspective(500px) rotateY(6.5deg)");
//   };

//   const scrollToProjects = () => {
//     const el = document.getElementById("projects");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative">
//       <NavbarSection />
//       <div className="relative w-full h-screen overflow-hidden text-white">
//         <img
//           src={Walpaper}
//           alt="Bubble Background"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
//         <div className="relative max-w-7xl z-20 flex flex-col md:flex-row items-center justify-between mx-auto h-full">
//           <div
//             ref={textRef}
//             className={`flex-1 transition-all duration-1000 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <h1 className="text-5xl md:text-[80px] font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-8">
//               I'm Nuraddin
//             </h1>
//             <p className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-100 to-cyan-400 text-transparent bg-clip-text mb-6">
//               Frontend Developer • Improving • Learning
//             </p>
//             <button
//               onClick={scrollToProjects}
//               aria-label="Scroll to projects"
//               className="group flex items-center justify-center w-16 h-16 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
//             >
//               <svg
//                 className="w-8 h-8 transform group-hover:translate-y-1 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="12" y1="5" x2="12" y2="19" />
//                 <polyline points="19 12 12 19 5 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 flex justify-center mx-auto mt-12 md:mt-0">
//             <img
//               src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
//               alt="Coding GIF"
//               className="max-w-[350px] md:max-w-[500px] w-full h-auto rounded-lg shadow-lg transition-transform duration-200 ease-out"
//               style={{ transformOrigin: "center center", transform }}
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const MainSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [transform, setTransform] = useState(
    "perspective(500px) rotateY(6.5deg)"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const dx = (x / width - 0.5) * 2;
    const dy = (y / height - 0.5) * 2;

    const rotateX = dy * 10;
    const rotateY = dx * 10;
    const scale = 1 + 0.05 * (Math.abs(dx) + Math.abs(dy));

    setTransform(
      `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(500px) rotateY(6.5deg)");
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <img
        src={Walpaper}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 xl:px-0 py-20 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
        {/* Text */}
        <div
          ref={textRef}
          className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-6">
            I'm Nuraddin
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-100 to-cyan-400 text-transparent bg-clip-text mb-8">
            Frontend Developer • Improving • Learning
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              aria-label="Scroll to projects"
              className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Coding GIF"
            className="w-3/4 sm:w-[300px] md:w-[400px] lg:w-[500px] max-w-full h-auto rounded-lg shadow-lg transition-transform duration-200 ease-out"
            style={{ transformOrigin: "center center", transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};
