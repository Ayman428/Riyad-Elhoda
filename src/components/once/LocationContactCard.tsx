import { useTranslation } from "react-i18next";
import ContactCard from "./ContactCard";
import WrapperContainer from "../reuse/WrapperContainer";

// Example usage
const LocationContactCard = () => {
  const { t } = useTranslation();
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <WrapperContainer>
      <div className="flex flex-col gap-8">
        <ContactCard
          title={t(`equality:en.riyadhAlHuda.title`)}
          description={
            t(`equality:en.riyadhAlHuda.description`, {
              returnObjects: true,
            }) as string[]
          }
          email="info@riyadhalhuda.edu.sa"
          phone="0133500141"
          whatsapp="0530841681 الروضة"
          logistics="0534014180 : المتوسط والثانوي"
          address={t(`equality:en.riyadhAlHuda.address`)}
          mapImageSrc="../../../public/assets/map.png"
          profileImageSrc="../../../public/assets/profile.png"
          contactButtonText={t(`equality:en.contactButtonText`)}
          onContactClick={handleContactClick}
        />
        <ContactCard
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
          onContactClick={handleContactClick}
        />
        <ContactCard
          title={t(`equality:en.riyadhAlHudaKindergarten.title`)}
          description={
            t(`equality:en.riyadhAlHudaKindergarten.description`, {
              returnObjects: true,
            }) as string[]
          }
          email="55778@estg.moe.gov.sa"
          phone="013488888"
          whatsapp="0531949515"
          logistics="0534014180"
          address={t(`equality:en.riyadhAlHudaKindergarten.address`)}
          mapImageSrc="../../../public/assets/map.png"
          profileImageSrc="../../../public/assets/profile.png"
          contactButtonText={t(`equality:en.contactButtonText`)}
          onContactClick={handleContactClick}
        />
        <ContactCard
          whatsapp="0531949515"
          logistics="0534014180"
          title={t(`equality:en.alFayhaaCollege.title`)}
          description={
            t(`equality:en.alFayhaaCollege.description`, {
              returnObjects: true,
            }) as string[]
          }
          email="info@riyadhalhuda.edu.sa"
          phone="+966-566-651-32"
          address={t(`equality:en.alFayhaaCollege.address`)}
          mapImageSrc="../../../public/assets/map.png"
          profileImageSrc="../../../public/assets/profile.png"
          contactButtonText={t(`equality:en.contactButtonText`)}
          onContactClick={handleContactClick}
        />
      </div>
    </WrapperContainer>
  );
};

export default LocationContactCard;
