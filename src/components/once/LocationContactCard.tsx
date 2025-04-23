import { useTranslation } from "react-i18next";
import ContactCard from "./ContactCard";
import WrapperContainer from "../reuse/WrapperContainer";
import { useFetchSchoolBranches } from "../../hooks/useFetchSchoolBranches";
import { useScrollToHash } from "../../hooks/useScrollToHash";

// Example usage
const LocationContactCard = () => {
  const { data } = useFetchSchoolBranches();
  useScrollToHash();

  const { t } = useTranslation();
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <WrapperContainer>
      <div className="flex flex-col gap-8">
        {data &&
          data.slice(1).map((branch, index) => (
            <div id={`${index}`}>
              <ContactCard
                key={index + 1} // index + 1 to reflect actual position in original array
                title={branch.title}
                description={branch.notes}
                email={branch.email}
                phone={
                  (branch.phones &&
                    branch.phones.phones?.filter(Boolean).join(" - ")) ||
                  ""
                }
                whatsapp={
                  (branch.phones &&
                    branch.phones.mobiles?.filter(Boolean).join(" - ")) ||
                  ""
                }
                logistics="0534014180 : المتوسط والثانوي"
                address={branch.address}
                mapImageSrc="../../../public/assets/map.png"
                profileImageSrc="../../../public/assets/profile.png"
                contactButtonText={t(`equality:en.contactButtonText`)}
                lat={branch.lat}
                lng={branch.long}
                onContactClick={handleContactClick}
              />
            </div>
          ))}
      </div>
    </WrapperContainer>
  );
};

export default LocationContactCard;
