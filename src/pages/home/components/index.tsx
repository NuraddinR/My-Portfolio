import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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
        <div className="text-xl font-bold text-white">MyPortfolio</div>

        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-white hover:text-blue-500">
            About
          </a>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact Me
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
          <a href="#about" className="text-white hover:text-blue-500">
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
