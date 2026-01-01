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

// Industries translations
import enIndustries from '@/app/(pages)/industries/translations/en.json';
import deIndustries from '@/app/(pages)/industries/translations/de.json';
import trIndustries from '@/app/(pages)/industries/translations/tr.json';
// --- ADD CONTACT IMPORTS HERE ---
import enContact from '@/app/(pages)/contact/translations/en.json';
import deContact from '@/app/(pages)/contact/translations/de.json';
import trContact from '@/app/(pages)/contact/translations/tr.json';
// --- ADD PRICING IMPORTS HERE ---
import enPricing from '@/app/(pages)/pricing/translations/en.json';
import dePricing from '@/app/(pages)/pricing/translations/de.json';
import trPricing from '@/app/(pages)/pricing/translations/tr.json';

const resources = {
  en: {
    translation: enTranslation,
    about: enAbout,
    layout: enLayout,
    industries: enIndustries,
    contact: enContact,
    pricing: enPricing
  },
  de: {
    translation: deTranslation,
    about: deAbout,
    layout: deLayout,
    industries: deIndustries,
    contact: deContact,
    pricing: dePricing
  },
  tr: {
    translation: trTranslation,
    about: trAbout,
    layout: trLayout,
    industries: trIndustries,
    contact: trContact,
    pricing: trPricing
  },
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

      detection: {
        order: ['localStorage'],
        caches: ['localStorage'],
        lookupLocalStorage: 'language',
      },

      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      ns: ['translation', 'about', 'layout', 'industries', 'contact', 'pricing'],
      defaultNS: 'translation',
    });
}

if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('language');

  if (!savedLang) {
    localStorage.setItem('language', 'en');
  }

  const langToUse = savedLang || 'en';
  if (i18next.language !== langToUse) {
    i18next.changeLanguage(langToUse);
  }
}

export default i18next;