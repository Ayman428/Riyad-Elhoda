import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  headerEn,
  headerAr,
  navbarEn,
  navbarAr,
  equalityEn,
  equalityAr,
} from "../../public/locals";

const resources = {
  en: {
    header: headerEn,
    navbar: navbarEn,
    equality: equalityEn,
  },
  ar: {
    header: headerAr,
    navbar: navbarAr,
    equality: equalityAr,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

export default i18n;
