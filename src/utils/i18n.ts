import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  headerEn,
  headerAr,
  navbarEn,
  navbarAr,
  equalityEn,
  equalityAr,
  homeAr,
  homeEn,
} from "../../public/locals";

const resources = {
  en: {
    header: headerEn,
    navbar: navbarEn,
    equality: equalityEn,
    home: homeEn,
  },
  ar: {
    header: headerAr,
    navbar: navbarAr,
    equality: equalityAr,
    home: homeAr,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

export default i18n;
