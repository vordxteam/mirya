import { useTranslation } from "react-i18next";

type LayoutKeys =
  | "cta.industries" // Add this if you want to use returnObjects
  | "cta.default"
  | "cta.industries.h1"
  | "cta.industries.p"
  | "cta.default.h1"
  | "cta.default.p"
  | "cta.button"
  | "footer.newsletter"
  | "footer.inputPlaceholder"
  | "footer.subscribe"
  | "footer.copyright"
  | "footer.privacy"
  | "footer.security"
  | "footer.imprint"
  | `footer.sections.pages.links.${number}.name`
  | `footer.sections.pages.links.${number}.href`
  | `footer.sections.technology.links.${number}.name`
  | `footer.sections.technology.links.${number}.href`
  | `footer.sections.contact.links.${number}.name`
  | `footer.sections.contact.links.${number}.href`
  | "header.logoAlt"
  | "header.button"
  | `header.links.${number}.name`
  | `header.links.${number}.href`;
export const useLayoutTranslation = () => {
  return useTranslation<"translation" | "layout", LayoutKeys>("layout");
};
