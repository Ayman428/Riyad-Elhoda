import { useTranslation } from "react-i18next";
import Container from "../components/once/Container";
import Hero from "../components/once/Hero";
import NewsLetter from "../components/once/NewsLetter";
import Review from "../components/once/Review";
import Sponsors from "../components/once/Sponsors";
import FAQs from "../components/reuse/FAQs";
import GoalsContainer from "../components/reuse/GoalsContainer";
import HomeAboutAlhuda from "../components/reuse/HomeAboutAlhuda";
import WrapperContainer from "../components/reuse/WrapperContainer";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        classplus="pt-48"
        backgroundImage="/assets/HeroBg.png"
        title={t("header:riyadhAlHudaTitle")}
        header="Riyadh AL-Huda Schools Company"
        description={t("header:riyadhAlHudaDescription")}
        isHomePage={true}
      />
      <WrapperContainer>
        <HomeAboutAlhuda />
        <GoalsContainer />
      </WrapperContainer>
      <Review />
      <Container
        title={t("header:title")}
        buttonText={t("header:buttonText")}
        fontSize="45px"
      />
      <FAQs />
      <NewsLetter />
      <Sponsors />
    </div>
  );
};

export default Home;
