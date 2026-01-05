import { useTranslation } from "react-i18next";

export const useStartup = () => {
  const { t } = useTranslation("startup");

  return {
    hero: {
      back: t("hero.back"),
      title: t("hero.title"),
      description: t("hero.description")
    },
    card: {
      title: t("card.title"),
      description: t("card.description"),
      price: t("card.price"),
      period: t("card.period"),
      buttonText: t("card.buttonText"),
      messageTitle: t("card.messageTitle"),
      messageDescription: t("card.messageDescription"),
      image: t("card.image")
    }
  };
};
