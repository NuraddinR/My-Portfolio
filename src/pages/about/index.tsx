import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TechCrystal from "./TechStackSection";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id="about">
      <div className="relative w-full min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div
          className="relative z-20 gap-2 max-w-7xl mx-auto px-4 xl:px-0 py-0 flex flex-col-reverse lg:flex-col min-h-screen"
          ref={ref}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-lg lg:text-xl font-normal text-center lg:text-left">
              INTRODUCTION
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-3xl lg:text-7xl font-bold text-center lg:text-left">
              Overview
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={visible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-base lg:text-lg mt-4">
              I am a 21-year-old young programming developer. I have already
              achieved many successes with my personal skills.{" "}
              <br className="hidden md:block" /> Since new innovations appear
              every day in the field of technology, I am constantly aiming to
              improve myself, <br className="hidden md:block" /> learn and
              analyze innovations. In the frontend field, I have experience in
              technologies such as HTML, CSS, JavaScript,{" "}
              <br className="hidden md:block" /> TypeScript and React.js. I also
              have experience in working with Git and APIs for version control
              in projects. <br className="hidden md:block" /> My goal is to keep
              up with developing technologies, learn new trends and improve my
              professionalism in the field of programming.{" "}
            </p>
          </motion.div>
          <TechCrystal />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
