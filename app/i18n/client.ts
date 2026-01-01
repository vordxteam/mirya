// src/i18n.ts (or wherever you keep it)

'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import trTranslation from './locales/tr/translation.json';

import enAbout from '@/app/(pages)/about/translations/en.json';
import deAbout from '@/app/(pages)/about/translations/de.json';
import trAbout from '@/app/(pages)/about/translations/tr.json';
// Layout translation files
import enLayout from '@/app/Layout/translation/en.json';
import deLayout from '@/app/Layout/translation/de.json';
import trLayout from '@/app/Layout/translation/tr.json';
const resources = {
  en: { translation: enTranslation, about: enAbout, layout: enLayout },
  de: { translation: deTranslation, about: deAbout, layout: deLayout },
  tr: { translation: trTranslation, about: trAbout, layout: trLayout },
};

// Initialize i18next only once
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: 'en',
      supportedLngs: ['en', 'de', 'tr'],

      // Critical: We ONLY use our own localStorage key
      detection: {
        order: ['localStorage'],           // Never use browser language
        caches: ['localStorage'],
        lookupLocalStorage: 'language',     // Our custom key
      },

      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      ns: ['translation', 'about' ,'layout'],
      defaultNS: 'translation',
    });
}

// Force English on first visit + sync with i18next
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('language');

  // First time ever → set English
  if (!savedLang) {
    localStorage.setItem('language', 'en');
  }

  // Make sure i18next is using the correct language (important after refresh)
  const langToUse = savedLang || 'en';
  if (i18next.language !== langToUse) {
    i18next.changeLanguage(langToUse);
  }
}

export default i18next;