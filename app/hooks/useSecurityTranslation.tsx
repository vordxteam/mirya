"use client";
import { useTranslation } from "react-i18next";

export const useSecurityTranslation = () => {
  const { t } = useTranslation("security");
  return t;
};
