"use client";

import { useTranslation } from "react-i18next";

export const useHomeContent = () => {
  const { t } = useTranslation("home"); // home.json
  return {
    badge: t("hero.badge"),
    mainTitle: t("hero.mainTitle"),
    description: t("hero.description"),
    buttons: {
      getStarted: t("hero.buttons.getStarted"),
      contactUs: t("hero.buttons.contactUs")
    }
  };
};
