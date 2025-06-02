import { useEffect, useRef, useState } from "react";
import { NavbarSection } from ".";
import Walpaper from "../../../assets/images/walpaper.png";

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
    <div className="relative">
      <NavbarSection />
      <div className="relative w-full h-screen overflow-hidden text-white">
        <img
          src={Walpaper}
          alt="Bubble Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative max-w-7xl z-20 flex flex-col md:flex-row items-center justify-between mx-auto h-full">
          <div
            ref={textRef}
            className={`flex-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-5xl md:text-[80px] font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-8">
              I'm Nuraddin
            </h1>
            <p className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-100 to-cyan-400 text-transparent bg-clip-text mb-6">
              Frontend Developer • Improving • Learning
            </p>
            <button
              onClick={scrollToProjects}
              aria-label="Scroll to projects"
              className="group flex items-center justify-center w-16 h-16 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              <svg
                className="w-8 h-8 transform group-hover:translate-y-1 transition-transform duration-300"
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
          <div className="flex-1 flex justify-center mx-auto mt-12 md:mt-0">
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding GIF"
              className="max-w-[350px] md:max-w-[450px] w-full h-auto rounded-lg shadow-lg transition-transform duration-200 ease-out"
              style={{ transformOrigin: "center center", transform }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
