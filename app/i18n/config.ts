// app/i18n/config.ts  (or .tsx if you prefer)

export const languages = ['en', 'de', 'tr'] as const;
export type Language = typeof languages[number]; // 'en' | 'de' | 'tr'

export const defaultLanguage: Language = 'en';

// Fixed: Record needs two type arguments → Record<key, value>
export const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  tr: 'Türkçe',
} as const;

// Optional: nicer display names for UI (with proper capitalization)
export const languageNativeNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  tr: 'Türkçe',
} as const;