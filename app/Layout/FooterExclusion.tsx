'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterConditional() {
  const pathname = usePathname();
  
  // Define paths where CTA should NOT be shown
  const ctaExclusion = [
    '/onboarding',
  ];

  // Check if current path is in exclusion list
  const shouldShowCTA = !ctaExclusion.some(path => 
    pathname?.startsWith(path)
  );

  // Don't render anything if path is in exclusion list
  if (!shouldShowCTA) {
    return null;
  }

  return <Footer />;
}