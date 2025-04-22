import { useTranslation } from "react-i18next";
import ContactCard from "./ContactCard";
import WrapperContainer from "../reuse/WrapperContainer";
import { useFetchSchoolBranches } from "../../hooks/useFetchSchoolBranches";

// Example usage
const LocationContactCard = () => {
  const { data } = useFetchSchoolBranches();

  const { t } = useTranslation();
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <WrapperContainer>
      <div className="flex flex-col gap-8">
        {data &&
          data.slice(1).map((branch, index) => (
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
          ))}

        {/* <ContactCard
          title={t(`equality:en.riyadhAlFayhaa.title`)}
          description={
            t(`equality:en.riyadhAlFayhaa.description`, {
              returnObjects: true,
            }) as string[]
          }
          email="55173@estg.moe.gov.sa"
          phone="0133480704 :( الروضة والابتدائي )"
          whatsapp="0555283855 واتساب: موحد"
          logistics="0531274577 :(المتوسط والثانوي) رقم الهاتف"
          address={t(`equality:en.riyadhAlFayhaa.address`)}
          mapImageSrc="../../../public/assets/map.png"
          profileImageSrc="../../../public/assets/profile.png"
          contactButtonText={t(`equality:en.contactButtonText`)}
          lat={30.056554}
          lng={31.363681}
          onContactClick={handleContactClick}
        /> */}
      </div>
    </WrapperContainer>
  );
};

export default LocationContactCard;
