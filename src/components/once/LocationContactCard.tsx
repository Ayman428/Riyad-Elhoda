import { useTranslation } from "react-i18next";
import ContactCard from "./ContactCard";
import WrapperContainer from "../reuse/WrapperContainer";
import { useFetchSchoolBranches } from "../../hooks/useFetchSchoolBranches";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import profile from "/public/assets/profile.png";
import { useNavigate } from "react-router";

// Example usage dqsadqw
const LocationContactCard = () => {
  const { data } = useFetchSchoolBranches();
  useScrollToHash();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleContactClick = () => {
    navigate("/contact");
  };

  const phoneNumbers = [
    {
      phone1: { text: "الإدارة", phone: "0133500141" },
      phone2: { text: "الروضة", phone: "0530841681" },
      phone3: { text: "الابتدائي", phone: "0507369599" },
      phone4: { text: "المتوسط والثانوي", phone: "0534014180" },
    },
    {
      phone1: { text: "الروضة والابتدائي", phone: "0133480704" },
      phone2: { text: "المتوسط والثانوي", phone: "0531274577" },
      phone3: { text: "واتساب الموعد", phone: "0555283855" },
      phone4: null,
    },
    {
      phone1: { text: "الهاتف", phone: "013488888" },
      phone2: { text: "الجوال", phone: "0531949515" },
      phone3: null,
      phone4: null,
    },
    {
      phone1: { text: "الهاتف", phone: "+966-566-651-32" },
      phone2: null,
      phone3: null,
      phone4: null,
    },
  ];

  return (
    <WrapperContainer>
      <div className="flex flex-col gap-8">
        {data &&
          data.map((branch, index) => {
            // Get the corresponding phone numbers or use empty strings if index is out of bounds
            const phoneData =
              index < phoneNumbers.length
                ? phoneNumbers[index]
                : {
                    phone1: null,
                    phone2: null,
                    phone3: null,
                    phone4: null,
                  };

            return (
              <div id={`${index}`} key={index}>
                <ContactCard
                  key={index + 1} // index + 1 to reflect actual position in original array
                  title={branch.title}
                  description={branch.notes}
                  email={branch.email}
                  phone1={phoneData.phone1}
                  phone2={phoneData.phone2}
                  phone3={phoneData.phone3}
                  whatsapp={phoneData.phone4} // Using phone4 as whatsapp for this example
                  address={branch.address}
                  mapImageSrc="../../../public/assets/map.png"
                  profileImageSrc={profile}
                  contactButtonText={t(`equality:en.contactButtonText`)}
                  lat={branch.lat}
                  lng={branch.long}
                  onContactClick={handleContactClick}
                />
              </div>
            );
          })}
      </div>
    </WrapperContainer>
  );
};

export default LocationContactCard;
