import { useTranslation } from 'react-i18next';

// Define all keys from your contact JSON structure
type ContactKeys =
  // Hero Section
  | "hero.badge"
  | "hero.title"
  | "hero.description"

  // Contact Info Section
  | "contactInfo.title"
  | "contactInfo.description"
  | "contactInfo.availability.label"
  | "contactInfo.availability.time"
  | "contactInfo.followUs"
  | `contactInfo.cards.${number}.title`
  | `contactInfo.cards.${number}.value`

  // Form Section
  | "form.sendMessage"
  | "form.placeholders.name"
  | "form.placeholders.email"
  | "form.placeholders.phone"
  | "form.placeholders.subject"
  | "form.placeholders.message"
  | "form.subjects.general"
  | "form.subjects.support"
  | "form.subjects.billing"
  | "form.subjects.feedback"
  | "form.subjects.other"
  | "form.privacy"
  | "form.privacyLink"
  | "form.submit"

  // Cards Section (Community & Anything Else)
  | "cardsSection.community.title"
  | "cardsSection.community.description"
  | "cardsSection.community.button"
  | "cardsSection.anythingElse.title"
  | "cardsSection.anythingElse.description"
  | "cardsSection.anythingElse.button";

export const useContact = () => {
  // Replace 'contact' with the name of your contact JSON file namespace
  return useTranslation<'translation' | 'contact', ContactKeys>('contact');
};