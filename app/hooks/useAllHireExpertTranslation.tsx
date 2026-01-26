"use client";
import { useTranslation } from "react-i18next";

export const useJobTranslation = () => {
  const { t, i18n } = useTranslation("expert");

  return {
    t,
    language: i18n.language
  };
};
