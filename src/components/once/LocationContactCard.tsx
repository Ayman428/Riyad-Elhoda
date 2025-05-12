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
  const handleContactClick = (key: "contact" | "link") => {
    if (key === "contact") {
      navigate("/contact");
    } else if (key === "link") {
      window.location.href =
        "https://edugate.fayha.edu.sa/fpc/ui/guest/application_online/index/typeApplicationOnlineIndex.faces";
    }
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
      phone3: { text: "واتساب", phone: "0555283855" },
      phone4: null,
    },
    {
      phone1: { text: "الهاتف", phone: "013488888" },
      phone2: { text: "الجوال", phone: "0531949515" },
      phone3: null,
      phone4: null,
    },
    {
      phone1: null,
      phone2: null,
      phone3: null,
      phone4: null,
    },
  ];

  const mapSrcs = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3898100924275!2d49.53428779999999!3d27.1125295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e350f85bf626acf%3A0x9fd3c62825b61d5b!2sRiad%20Al%20Huda%20Private%20Schools%20for%20Girls!5e0!3m2!1sen!2seg!4v1746448936406!5m2!1sen!2seg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.2111657476253!2d49.554736899999995!3d27.1181581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e350fa441f0b48b%3A0x89262603d6d1f46!2sRiad%20Al%20Fayhaa%20schools%20for%20girls!5e0!3m2!1sen!2seg!4v1746448850547!5m2!1sen!2seg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3043897060393!2d49.54636689999999!3d27.115221000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e350f3e9c44475d%3A0x4a3c2e0d0bf7a3e2!2z2LHZiNi22Kkg2LHZitin2LYg2KfZhNmH2K_ZiSgyKQ!5e0!3m2!1sen!2seg!4v1746448765376!5m2!1sen!2seg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3069351341937!2d49.546352!3d27.1151408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e350f98e9b680f5%3A0x66b5b12aaf2bd686!2sAl-Fayha%20College!5e0!3m2!1sen!2seg!4v1746448986851!5m2!1sen!2seg",
  ];

  return (
    <WrapperContainer>
      <div className="flex flex-col gap-8">
        {data &&
          data.map((branch, index) => {
            const phoneData =
              index < phoneNumbers.length
                ? phoneNumbers[index]
                : {
                    phone1: null,
                    phone2: null,
                    phone3: null,
                    phone4: null,
                  };
            const mapSrc = index < mapSrcs.length ? mapSrcs[index] : null;
            return (
              <div id={`${index}`} key={index}>
                <ContactCard
                  key={index + 1}
                  title={branch.title}
                  description={branch.notes}
                  email={branch.email}
                  phone1={phoneData.phone1}
                  phone2={phoneData.phone2}
                  phone3={phoneData.phone3}
                  whatsapp={phoneData.phone4}
                  address={branch.address}
                  mapImageSrc="../../../public/assets/map.png"
                  profileImageSrc={profile}
                  contactButtonText={t(`equality:en.contactButtonText`)}
                  mapSrc={mapSrc!}
                  onContactClick={() => {
                    if (index === 3) {
                      handleContactClick("link");
                    } else {
                      handleContactClick("contact");
                    }
                  }}
                />
              </div>
            );
          })}
      </div>
    </WrapperContainer>
  );
};

export default LocationContactCard;
