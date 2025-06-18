import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TechCubeGallery from "./TechStackSection";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about">
      <div className="relative w-full min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div
          ref={ref}
          className="relative z-20 container mx-auto px-4 xl:px-0 pt-12 flex flex-col items-start justify-start gap-2 lg:gap-2"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-md lg:text-xl font-normal">INTRODUCTION</h1>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold">Overview</h1>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-base lg:text-lg mt-4">
              I am a 21-year-old young programming developer. I have already
              achieved many successes with my personal skills.
              <br className="hidden md:block" />
              Since new innovations appear every day in the field of technology,
              I am constantly aiming to improve myself,
              <br className="hidden md:block" />
              learn and analyze innovations. In the frontend field, I have
              experience in technologies such as HTML, CSS, JavaScript,
              TypeScript, and React.js.
              <br className="hidden md:block" />
              I also have experience in working with Git and APIs for version
              control in projects.
              <br className="hidden md:block" />
              My goal is to keep up with developing technologies, learn new
              trends and improve my professionalism in the field of programming.
            </p>
          </motion.div>

          {/* ⭐ Kristallar aşağıda görünəcək */}
          <div className="w-full">
            <TechCubeGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
