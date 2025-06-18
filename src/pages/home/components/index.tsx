import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarIcon from "../../../assets/images/portfolioicon.png";

export const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const targetY = 0;
    const duration = 800;
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

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (!el) return;

    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + startY - 100;
    const duration = 800;
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

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (!el) return;

    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + startY - 100;
    const duration = 800;
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
    <nav className="shadow-md px-4 py-7 w-full h-[68px] fixed top-0 left-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <div onClick={scrollToTop}>
          <div className="flex items-center gap-2">
            <img className="w-8 h-8 rounded-sm" src={NavbarIcon} alt="" />
            <h1 className="text-2xl font-medium bg-gradient-to-r from-blue-200 to-blue-300 text-transparent bg-clip-text">
              Welcome
            </h1>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-xl font-medium">
          <a
            onClick={scrollToAbout}
            href="#about"
            className="text-white hover:text-blue-500 duration-300"
          >
            About
          </a>
          <a
            onClick={scrollToWork}
            href="#work"
            className="text-white hover:text-blue-500 duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-500 duration-300"
          >
            Contact
          </a>
        </div>

        <button
          className="text-white z-30 block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          ref={menuRef}
          className={`md:hidden absolute top-full right-4 mt-2 bg-gray-900 bg-opacity-90 py-4 px-6 rounded-md shadow-lg transition-all duration-300 transform origin-top
    flex flex-col gap-4
    ${
      isOpen
        ? "opacity-100 scale-100 visible pointer-events-auto"
        : "opacity-0 scale-95 invisible pointer-events-none"
    }`}
          style={{ minWidth: "150px" }}
        >
          <a
            href="#about"
            onClick={scrollToAbout}
            className="text-white hover:text-blue-500"
          >
            About
          </a>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};
