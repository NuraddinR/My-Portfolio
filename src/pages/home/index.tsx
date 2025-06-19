import AboutSection from "../about";
import InformationSection from "../information";
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
      <InformationSection />
    </div>
  );
};

export default IntroductionSection;
