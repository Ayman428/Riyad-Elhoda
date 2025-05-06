import { useTranslation } from "react-i18next";
import EqualityValues from "../components/once/EqualityValues";
import Hero from "../components/once/Hero";
import AboutAlhuda from "../components/reuse/AboutAlhuda";
import GoalsContainer from "../components/reuse/GoalsContainer";
import WrapperContainer from "../components/reuse/WrapperContainer";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        classplus="pt-20"
        backgroundImage="/assets/HeroBg3.png"
        title={t("header:riyadhVision")}
        header={t("header:riyadhAlHudaVision")}
        description={t("header:riyadhAlHudaVisionDetails")}
        isHomePage={false}
      />
      <AboutAlhuda />
      <WrapperContainer>
        <GoalsContainer />
      </WrapperContainer>
      <EqualityValues />
    </div>
  );
};

export default About;
