import { useTranslation } from "react-i18next";
import Hero from "../components/once/Hero";
import LocationContactCard from "../components/once/LocationContactCard";
import { useScrollToHash } from "../hooks/useScrollToHash";
import GoalsContainer from "../components/reuse/GoalsContainer";

const SchoolBranches = () => {
  const { t } = useTranslation();
  useScrollToHash();
  const description = t("header:riyadhAlHudaBranchesDetails");
  const lines = description.split("\n");
  return (
    <div>
      <Hero
        classplus="mt-10"
        backgroundImage="/assets/HeroBg4.png"
        title={t("header:riyadhAlHudaBranches")}
        // description={t("header:riyadhAlHudaBranchesDetails")}
        isHomePage={false}
      >
        <div data-aos="fade-right" className="text-[#B7CCF6] md:text-lg mb-6 md:mb-3  ">
          <p className="md:-mr-4">{lines[0]}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            {lines.slice(1).map((line, index) => (
              <li key={index}>{line.replace(/^\.\s*/, "")}</li> // removes leading dot
            ))}
          </ul>
        </div>
      </Hero>
      <GoalsContainer />
      <LocationContactCard />
    </div>
  );
};

export default SchoolBranches;
