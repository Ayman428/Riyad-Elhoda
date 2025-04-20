import { useTranslation } from "react-i18next";
import EqualityValues from "../components/once/EqualityValues";
import Hero from "../components/once/Hero";
import AboutAlhuda from "../components/reuse/AboutAlhuda";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        classplus="pt-20"
        backgroundImage="/assets/HeroBg3.png"
        title={t("header:riyadhAlHudaTitle")}
        header="Riyadh AL-Huda Schools"
        description={t("header:riyadhAlHudaTitle")}
        isHomePage={false}
      />
      <AboutAlhuda />
      <EqualityValues />
    </div>
  );
};

export default About;
