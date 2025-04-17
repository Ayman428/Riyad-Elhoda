import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  headerEn,
  headerAr,
} from "../../public/locals";

const resources = {
  en: {
    header: headerEn,
  },
  ar: {
    header: headerAr,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

export default i18n;
