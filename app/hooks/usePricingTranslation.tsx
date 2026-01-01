import { useTranslation } from 'react-i18next';

type PricingKeys =
  | "hero.badge" | "hero.title" | "hero.description"
  | "hero.tabs.halfYearly" | "hero.tabs.annual"
  | "choosePlan.banner.title" | "choosePlan.banner.description" | "choosePlan.banner.button"
  | "choosePlan.cta.title" | "choosePlan.cta.startup.title" 
  | "choosePlan.cta.startup.description" | "choosePlan.cta.startup.button";

export const usePricing = () => {
  return useTranslation<'translation' | 'pricing', PricingKeys>('pricing');
};