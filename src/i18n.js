// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationKZ from './locales/kz/translation.json';


const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  kz: {
    translation: translationKZ
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
