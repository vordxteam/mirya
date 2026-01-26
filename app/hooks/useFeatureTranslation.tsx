"use client";

import { useTranslation } from "react-i18next";

export const useFeatureTranslation = () => {
  const { t, i18n } = useTranslation("feature");

  return {
    t,
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
  };
};
