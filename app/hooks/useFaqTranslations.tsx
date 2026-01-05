import { useTranslation } from "react-i18next";



type FaqKeys =
  /* ---------------- Hero Section ---------------- */
  | "hero.label"
  | "hero.title"
  | "hero.description"
  | "hero.lastUpdated"

  /* ---------------- FAQ Sections ---------------- */
  | `sections.${number}.category`
  | `sections.${number}.description`

  /* ---------------- Questions & Answers ---------------- */
  | `sections.${number}.questions.${number}.question`
  | `sections.${number}.questions.${number}.answer`;

export const useFaq = () => {
 
  return useTranslation<"translation" | "faq", FaqKeys>("faq");
};
