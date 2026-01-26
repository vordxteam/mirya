"use client";
import { useTranslation } from "react-i18next";

export const useJobTranslation = () => {
  const { t, i18n } = useTranslation("experts");

  return {
    t,
    language: i18n.language
  };
};
