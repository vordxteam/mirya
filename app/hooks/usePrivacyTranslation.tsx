import { useTranslation } from "react-i18next";

export const usePrivacyTranslation = () => {
  const { t } = useTranslation("privacy");

  return {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      description: t("hero.description"),
      lastUpdated: t("hero.lastUpdated"),
    },
    contentSections: t("contentSections", { returnObjects: true }),
  };
};
