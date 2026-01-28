import { useTranslation } from "react-i18next";

export const useLiveSessionTranslation = () => {
  const { t, i18n } = useTranslation("live-session");

  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage: (lang: string) => i18n.changeLanguage(lang),
  };
};