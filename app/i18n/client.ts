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
// Home translations
import enHome from '@/app/(pages)/home/translations/en.json';
import deHome from '@/app/(pages)/home/translations/de.json';
import trHome from '@/app/(pages)/home/translations/tr.json';

import enImprint from '@/app/components/ImprintPages/translations/en.json';
import deImprint from '@/app/components/ImprintPages/translations/de.json';
import trImprint from '@/app/components/ImprintPages/translations/tr.json';
import enFaq from '@/app/(pages)/faq/translations/en.json';
import deFaq from '@/app/(pages)/faq/translations/de.json';
import trFaq from '@/app/(pages)/faq/translations/tr.json';
// User Testing translations
import enUserTesting from '@/app/(pages)/user-testing/translations/en.json';
import deUserTesting from '@/app/(pages)/user-testing/translations/de.json';
import trUserTesting from '@/app/(pages)/user-testing/translations/tr.json';
// --- CAREERS IMPORTS ---
import enCareers from '@/app/(pages)/careers/translations/en.json';
import deCareers from '@/app/(pages)/careers/translations/de.json';
import trCareers from '@/app/(pages)/careers/translations/tr.json';

// --- ADD PRIVACY IMPORTS HERE ---
import enPrivacy from '@/app/(pages)/privacy-policy/translations/en.json';
import dePrivacy from '@/app/(pages)/privacy-policy/translations/de.json';
import trPrivacy from '@/app/(pages)/privacy-policy/translations/tr.json';

// --- ADD SECURITY IMPORTS ---
import enSecurity from '@/app/(pages)/security/translations/en.json';
import deSecurity from '@/app/(pages)/security/translations/de.json';
import trSecurity from '@/app/(pages)/security/translations/tr.json';
// --- ADD STARTUP IMPORTS ---
import enStartup from '@/app/(pages)/start-up/translations/en.json';
import deStartup from '@/app/(pages)/start-up/translations/de.json';
import trStartup from '@/app/(pages)/start-up/translations/tr.json';
// --- ADD FORM IMPORTS ---
import enForm from '@/app/(pages)/application-form/translations/en.json';
import deForm from '@/app/(pages)/application-form/translations/de.json';
import trForm from '@/app/(pages)/application-form/translations/tr.json';
import enjob from '@/app/components/Jobs/translations/en.json';
import dejob from '@/app/components/Jobs/translations/de.json';
import trjob from '@/app/components/Jobs/translations/tr.json';

import enHire from '@/app/(pages)/hire-expert/translations/en.json'
import deHire from '@/app/(pages)/hire-expert/translations/de.json'
import trHire from '@/app/(pages)/hire-expert/translations/tr.json'

const resources = {
  en: {
    translation: enTranslation,
    about: enAbout,
    layout: enLayout,
    industries: enIndustries,
    contact: enContact,
    pricing: enPricing,
    home: enHome
    ,
    ImprintPages: enImprint,
    faq: enFaq,
    userTesting: enUserTesting,
    careers: enCareers,
    privacy: enPrivacy,
    security: enSecurity,
    startup: enStartup,
    form: enForm,
    job: enjob,
    hire: enHire
  },
  de: {
    translation: deTranslation,
    about: deAbout,
    layout: deLayout,
    industries: deIndustries,
    contact: deContact,
    pricing: dePricing,
    home: deHome,
    ImprintPages: deImprint,
    faq: deFaq,
    userTesting: deUserTesting,
    careers: deCareers,
    privacy: dePrivacy,
    security: deSecurity,
    startup: deStartup,
    form: deForm,
    job: dejob,
    hire : deHire

  },
  tr: {
    translation: trTranslation,
    about: trAbout,
    layout: trLayout,
    industries: trIndustries,
    contact: trContact,
    pricing: trPricing,
    home: trHome,
    ImprintPages: trImprint,
    faq: trFaq,
    userTesting: trUserTesting,
    careers: trCareers,
    privacy: trPrivacy,
    security: trSecurity,
    startup: trStartup,
    form: trForm,
    job: trjob,
    hire : trHire
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
      ns: ['translation', 'about', 'layout', 'industries', 'contact', 'pricing', 'home', 'ImprintPages', 'faq', 'userTesting', 'careers','privacy','security','startup','form' ,'job','feature','expert'],
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
