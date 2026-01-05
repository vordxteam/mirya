'use client';
import { useTranslation } from 'react-i18next';

const useJobTranslation = () => {
  const { t } = useTranslation('job'); 
  return { t };
};

export default useJobTranslation;
