// app/hooks/useAboutTranslation.ts
import { useTranslation } from 'react-i18next';

// Define the exact keys that exist in your about translations
type AboutKeys = 
  | "hero.badge"
  | "hero.title"
  | "hero.subtitle"
  | "hero.years"
  | "demo.badge"
  | "demo.title"
  | `demo.benefits.${number}`
  | "benefits.Benefits"
  | "benefits.title"
  | "benefits.subtitle"
  | `benefits.cards.${number}.title`
  | `benefits.cards.${number}.desc`
  | "different.badge"
  | "different.title"
  | "chooseus.badge"
  | "chooseus.title"
  | "chooseus.subtitle"
  | `chooseus.cards.${number}.title`
  | `chooseus.cards.${number}.desc`
  | "button";

export const useAbout = () => {
  return useTranslation<'translation' | 'about', AboutKeys>('about');
};