import { useTranslation } from "react-i18next";
import Hero from "../components/once/Hero";
import LocationContactCard from "../components/once/LocationContactCard";

const SchoolBranches = () => {
    const { t } = useTranslation();

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
    )
}

export default SchoolBranches;