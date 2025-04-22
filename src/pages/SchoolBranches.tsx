import { useTranslation } from "react-i18next";
import Hero from "../components/once/Hero";
import LocationContactCard from "../components/once/LocationContactCard";
import { useScrollToHash } from "../hooks/useScrollToHash";

const SchoolBranches = () => {
  const { t } = useTranslation();
  useScrollToHash();

  return (
    <div>
      <Hero
        classplus="pt-20"
        backgroundImage="/assets/HeroBg4.png"
        title={t("header:riyadhAlHudaBranches")}
        description={t("header:riyadhAlHudaBranchesDetails")}
        isHomePage={false}
      />
      <LocationContactCard />
    </div>
  );
};

export default SchoolBranches;
