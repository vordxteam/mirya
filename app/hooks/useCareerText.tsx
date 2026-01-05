import { useTranslation } from "react-i18next";

export const useCareersTranslation = () => {
  const { t } = useTranslation("careers");

  return {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      description: t("hero.description"),
      cta: t("hero.cta"),
    },
    whyMirya: {
      badge: t("whyMirya.badge"),
      title: t("whyMirya.title"),
      description: t("whyMirya.description"),
      cta: t("whyMirya.cta"),
      reasons: t("whyMirya.reasons", { returnObjects: true }),
    },
  };
};