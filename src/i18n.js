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

import processRu from "./locales/ru/process.json";
import processEn from "./locales/en/process.json";
import processEt from "./locales/et/process.json";

import privacyRu from "./locales/ru/privacy.json";
import privacyEn from "./locales/en/privacy.json";
import privacyEt from "./locales/et/privacy.json";

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
        process: processEt,
        about: etAbout,
        contacts: etContacts,
        privacy: privacyEt,
      },
      en: {
        common: enCommon,
        home: enHome,
        work: enWork,
        services: enServices,
        process: processEn,
        about: enAbout,
        contacts: enContacts,
        privacy: privacyEn,
      },
      ru: {
        common: ruCommon,
        home: ruHome,
        work: ruWork,
        services: ruServices,
        process: processRu,
        about: ruAbout,
        contacts: ruContacts,
        privacy: privacyRu,
      },
    },

    supportedLngs: ["et", "en", "ru"],
    fallbackLng: "et",
    lng: localStorage.getItem("language") || "et",

    defaultNS: "common",
    ns: ["common", "home", "work", "services", "process", "about", "contacts", "privacy"],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      lookupLocalStorage: "language",
      caches: ["localStorage"],
    },
  });

export default i18n;