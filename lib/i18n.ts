
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import enTranslation from '@/app/i18n/locales/en/translation.json';
// import deTranslation from '@/app/i18n/locales/de/translation.json';
// import trTranslation from '@/app/i18n/locales/tr/translation.json';

// declare module 'i18next' {
//   interface CustomTypeOptions {
//     defaultNS: 'translation';
//     resources: {
//       translation: typeof enTranslation;
//     };
//   }
// }

// i18n
//   .use(LanguageDetector)                 
//     .use(initReactI18next)                   
//   .init({
//     resources: {
//       en: { translation: enTranslation },
//       de: { translation: deTranslation },
//       tr: { translation: trTranslation },
//     },
//     fallbackLng: 'en',
//     supportedLngs: ['en', 'de', 'tr'],
//     defaultNS: 'translation',
//     lng: undefined, 
//     interpolation: {
//       escapeValue: false, 
//     },
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],
//     },
//   });

// export default i18n;


// src/lib/i18n.ts

'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '@/app/i18n/locales/en/translation.json';
import deTranslation from '@/app/i18n/locales/de/translation.json';
import trTranslation from '@/app/i18n/locales/tr/translation.json';

import enAbout from '@/app/(pages)/about/translations/en.json';
import deAbout from '@/app/(pages)/about/translations/de.json';
import trAbout from '@/app/(pages)/about/translations/tr.json';

const resources = {
  en: { translation: enTranslation, about: enAbout },
  de: { translation: deTranslation, about: deAbout },
  tr: { translation: trTranslation, about: trAbout },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'tr'],
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    ns: ['translation', 'about'],
    defaultNS: 'translation',
  });

export default i18next;