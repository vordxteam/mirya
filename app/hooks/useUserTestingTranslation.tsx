import { useTranslation } from "react-i18next";

export const useUserTestingTranslation = () => {
  const { t } = useTranslation("userTesting");

  return {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      description: t("hero.description"),
    },
  };
};
