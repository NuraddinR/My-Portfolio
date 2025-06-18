import AboutSection from "../about";
import WorksSection from "../works";
import { NavbarSection } from "./components";
import { MainSection } from "./components/main";

const IntroductionSection = () => {
  return (
    <div>  
      <NavbarSection />
      <MainSection />
      <AboutSection />
      <WorksSection />
    </div>
  );
};

export default IntroductionSection;
