import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        name: "Ibrahim",
        job: "I'm a Frontend Developer"
      }
    },
    ar: {
      translation: {
        home: "الرئيسية",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "تواصل",
        name: "إبراهيم",
        job: "أنا مطور واجهات"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;