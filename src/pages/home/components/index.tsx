import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <nav className="shadow-md px-4 py-5 w-full h-[68px] fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link to="/">
          <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="#2563EB" strokeWidth="4" />
              <text
                x="50%"
                y="54%"
                textAnchor="middle"
                fill="white"
                fontSize="36"
                fontFamily="Arial"
                dy=".3em"
              >
                NR
              </text>
            </svg>
            <h1 className="text-2xl font-normal bg-gradient-to-r from-blue-200 to-cyan-300 text-transparent bg-clip-text">
              Welcome
            </h1>
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link to="/about" className="text-white hover:text-blue-500 duration-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500 duration-300">
            Contact Me
          </Link>
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
          <Link to="/about" className="text-white hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};
