import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cozystay from "../../assets/images/cozystay.png";
import tictactoe from "../../assets/images/tictactoe.png";
import rentacar from "../../assets/images/rentacar.png";
import procalculator from "../../assets/images/procalculator.png";

const projects = [
  {
    title: "Modern Hotel",
    description:
      "A sleek and modern hotel booking website with a user-friendly interface and advanced search features.",
    image: cozystay,
    link: "https://cozystay-hotel.vercel.app",
    tech: ["#React", "#Node.ts", "#Vercel"],
  },
  {
    title: "Tic Tac Toe",
    description:
      "An interactive Tic Tac Toe game with a sleek design, smooth animations, responsive layout, and modern user experience.",
    image: tictactoe,
    link: "https://tic-tac-toe-eight-lilac.vercel.app",
    tech: ["#React", "#Tailwind", "#pnpm"],
  },
  {
    title: "Rent a Car",
    description:
      "A car rental platform with a user-friendly interface, advanced search features, secure payments, real-time availability, and modern design.",
    image: rentacar,
    link: "https://rentanuraddin.vercel.app",
    tech: ["#React", "#TypeScript", "#Tailwind"],
  },
  {
    title: "Calculator",
    description:
      "A professional calculator application with a sleek design, smooth animations, responsive layout, and modern user experience.",
    image: procalculator,
    link: "https://procalculator.vercel.app",
    tech: ["#Html", "#Css", "#JavaScript"],
  },
];

const WorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transforms, setTransforms] = useState<string[]>(
    projects.map(() => "perspective(500px) rotateY(0deg)")
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry", entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = (x / rect.width - 0.5) * 2;
    const dy = (y / rect.height - 0.5) * 2;

    const rotateX = dy * 10;
    const rotateY = dx * 10;
    const scale = 1 + 0.05 * (Math.abs(dx) + Math.abs(dy));

    const newTransform = `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    setTransforms((prev) => {
      const copy = [...prev];
      copy[index] = newTransform;
      return copy;
    });
  };

  const handleMouseLeave = (index: number) => {
    setTransforms((prev) => {
      const copy = [...prev];
      copy[index] = "perspective(500px) rotateY(0deg)";
      return copy;
    });
  };

  return (
    <section id="work">
      <div className="relative w-full min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 container mx-auto px-4 xl:px-0 pb-16 flex flex-col gap-8 min-h-screen">
          <div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-lg lg:text-xl font-semibold text-center lg:text-left mb-2">
                WORKS
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl lg:text-6xl font-bold text-center lg:text-left">
                My Projects
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-base lg:text-lg mb-20">
                <br className="hidden md:block" />
                Every project showcased here is a result of countless hours of
                dedication, learning, and <br className="hidden md:block" />
                overcoming challenges. The journey was not always easy — I
                encountered obstacles, <br className="hidden md:block" /> faced
                complex problems, and pushed myself beyond limits. But each step
                brought growth, and <br className="hidden md:block" /> today, I
                am proud to present these projects as a reflection of my hard
                work and passion for development.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index < 3 ? index * 0.5 : 0,
                  ease: "easeOut",
                }}
                className="transition-transform duration-200"
              >
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{
                    transform: transforms[index],
                    transformStyle: "preserve-3d",
                    transition: "transform 0.15s ease",
                  }}
                  className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="py-5 mt-5 flex flex-col justify-between h-full">
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h2>
                    <p className="text-sm mb-5 text-gray-300 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap mt-4 gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-200 to-blue-500 text-transparent bg-clip-text px-1 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
