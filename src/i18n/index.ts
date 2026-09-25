import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import es from "./es"
import en from "./en"

const savedLanguage = localStorage.getItem("language")

const browserLanguage = navigator.language.startsWith("es") ? "es" : "en"

i18n.use(initReactI18next).init({
  resources: {
    es,
    en,
  },

  lng: savedLanguage || browserLanguage,

  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n