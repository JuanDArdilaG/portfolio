import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "aboutme.title": "About Me",
      hi: "Hi!",
      welcomemessage: "I am",
      welcomeline: "I am",
      iam1: "a FullStack Web Developer",
      iam2: "a passionate programmer",
      iam3: "a creative problem solver",
    },
  },
  es: {
    translation: {
      "aboutme.title": "Acerca de mí",
      hi: "Hola.",
      welcomemessage: "Mi nombre es",
      welcomeline: "Soy",
      iam1: "un desarrollador web fullstack",
      iam2: "un programador apasionado",
      iam3: "un creativo solucionador de problemas",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
