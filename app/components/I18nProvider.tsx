// app/components/I18nProvider.tsx   (or src/components/I18nProvider.tsx)

'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/i18n/client'; // your client i18n instance
export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // This function runs only once on mount
    const initLanguage = async () => {
      const saved = localStorage.getItem('language') || 'en';

      if (i18n.language !== saved) {
        await i18n.changeLanguage(saved);
      }

      // This setState is inside an async callback → allowed by the rule
      setHydrated(true);
    };

    initLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← empty deps = run once

  // Show nothing (or a tiny loader) until correct language is loaded
  if (!hydrated) {
    return (
      <div className="fixed inset-0 bg-[#00031C] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}