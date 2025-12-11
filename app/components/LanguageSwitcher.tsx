'use client';

import { useTranslation } from 'react-i18next';
import { languages, languageNames, type Language } from '../i18n/config';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

 

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <select
        value={i18n.language ?? 'en'}
        onChange={(e) => changeLanguage(e.target.value as Language)}
        className="language-select"
      >
        {languages.map((lng) => (
          <option key={lng} value={lng}>
            {languageNames[lng]}
          </option>
        ))}
      </select>

      <style jsx>{`
        /* your styles */
      `}</style>
    </div>
  );
}