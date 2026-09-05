import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import etCommon from "./locales/et/common.json";
import enCommon from "./locales/en/common.json";
import ruCommon from "./locales/ru/common.json";

import etHome from "./locales/et/home.json";
import enHome from "./locales/en/home.json";
import ruHome from "./locales/ru/home.json";

import etWork from "./locales/et/work.json";
import enWork from "./locales/en/work.json";
import ruWork from "./locales/ru/work.json";

import etAbout from "./locales/et/about.json";
import enAbout from "./locales/en/about.json";
import ruAbout from "./locales/ru/about.json";

import etContacts from "./locales/et/contacts.json";
import enContacts from "./locales/en/contacts.json";
import ruContacts from "./locales/ru/contacts.json";

import etServices from "./locales/et/services.json";
import enServices from "./locales/en/services.json";
import ruServices from "./locales/ru/services.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      et: {
        common: etCommon,
        home: etHome,
        work: etWork,
        services: etServices,
        about: etAbout,
        contacts: etContacts,
      },
      en: {
        common: enCommon,
        home: enHome,
        work: enWork,
        services: enServices,
        about: enAbout,
        contacts: enContacts,
      },
      ru: {
        common: ruCommon,
        home: ruHome,
        work: ruWork,
        services: ruServices,
        about: ruAbout,
        contacts: ruContacts,
      },
    },

    supportedLngs: ["et", "en", "ru"],
    fallbackLng: "et",
    lng: localStorage.getItem("language") || "et",

    defaultNS: "common",
    ns: ["common", "home", "work", "services", "about", "contacts"],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      lookupLocalStorage: "language",
      caches: ["localStorage"],
    },
  });

export default i18n;