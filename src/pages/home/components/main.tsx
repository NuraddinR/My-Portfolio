import { NavbarSection } from ".";

export const MainSection = () => {
  return (
    <div className="relative">
      <NavbarSection />

      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <h1 className="text-4xl font-bold">I'm a Nuraddin</h1>
          <p className="mt-4">Frontend Developer | Improving | Learning</p>
        </div>
      </div>
    </div>
  );
};
