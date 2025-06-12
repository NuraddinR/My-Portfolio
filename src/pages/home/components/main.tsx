import { useEffect, useRef, useState } from "react";
import { StarCanvas } from "./StarCanvas";
import Lottie from "lottie-react";
import codingAnimation from "../../../assets/animation/animation.json";

export const MainSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [transform, setTransform] = useState(
    "perspective(500px) rotateY(6.5deg)"
  );

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
          if (leftRef.current) observer.unobserve(leftRef.current); 
        }
      },
      { threshold: 0.5 }
    );

    const rightObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setRightVisible(true);
          if (rightRef.current) observer.unobserve(rightRef.current); 
        }
      },
      { threshold: 0.5 }
    );

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);

    return () => {
      if (leftRef.current) leftObserver.unobserve(leftRef.current);
      if (rightRef.current) rightObserver.unobserve(rightRef.current);
    };
  }, []);
  

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (!el) return;

    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + startY - 100; // offset
    const duration = 800; // millisaniyə — yəni animasiya nə qədər davam edəcək
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (time: number) => {
      if (startTime === null) startTime = time;
      const timeElapsed = time - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startY + (targetY - startY) * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };
  
  
  

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <StarCanvas />
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 xl:px-0 py-20 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
        {/* Sol tərəf */}
        <div
          ref={leftRef}
          className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-700 ease-out ${
            leftVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-6">
            I'm Nuraddin!
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-100 to-cyan-400 text-transparent bg-clip-text mb-8">
            Frontend Developer • Improving • Learning
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="#about" className="no-underline">
              <button
                onClick={scrollToAbout}
                aria-label="Scroll to projects"
                className="group flex items-center gap-2 px-4 py-3 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
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
                <span className="text-base sm:text-lg font-medium">
                  Discover Me
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Sağ tərəf */}
        <div
          ref={rightRef}
          className={`w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0 transition-all duration-700 ease-out ${
            rightVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformOrigin: "center center", transform }}
        >
          <div className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px]">
            <Lottie
              animationData={codingAnimation}
              loop
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
