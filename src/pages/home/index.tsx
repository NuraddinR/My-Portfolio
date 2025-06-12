import AboutSection from "../about";
import { NavbarSection } from "./components";
import { MainSection } from "./components/main";

const IntroductionSection = () => {
  return (
    <div>  
      <NavbarSection />
      <MainSection />
      <AboutSection />
    </div>
  );
};

export default IntroductionSection;
