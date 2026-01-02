// app/hooks/useIndustriesTranslation.ts
import { useTranslation } from 'react-i18next';

// Define all the keys that exist in your industries translations
type IndustriesKeys =
  // Hero Section
  | "hero.badge"
  | "hero.title"
  | "hero.description"
  | "hero.lastUpdated"

  // AI Powered Section
  | "aiPowered.badge"
  | "aiPowered.title"
  | "aiPowered.description"
  | "aiPowered.button"
  | `aiPowered.features.${number}.title`
  | `aiPowered.features.${number}.description`

  // Impact Section
  | "impact.badge"
  | "impact.title"
  | "impact.description"
  | "impact.button"

  // Industries Section
  | "industries.badge"
  | "industries.title"
  | "industries.description"
  | `industries.list.${number}.title`
  | `industries.list.${number}.description`;

export const useIndustries = () => {
  return useTranslation<'translation' | 'industries', IndustriesKeys>('industries');
};
