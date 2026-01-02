import { useTranslation } from 'react-i18next';

type ImprintKeys =
  | 'hero.badge'
  | 'hero.title'
  | 'hero.description'
  | 'content.infoNotice'
  | 'content.productOf'
  | 'content.company'
  | 'content.addressLine1'
  | 'content.addressLine2'
  | 'content.register'
  | 'content.registrationNumber'
  | 'content.vat'
  | 'content.contact'
  | 'content.responsibleTitle'
  | 'content.responsiblePerson'
  | 'disclaimer.title'
  | 'disclaimer.contentTitle'
  | 'disclaimer.contentText1'
  | 'disclaimer.contentText2'
  | 'disclaimer.linksTitle'
  | 'disclaimer.linksText1'
  | 'disclaimer.linksText2'
  | 'copyright.title'
  | 'copyright.text1'
  | 'copyright.text2'
  | 'copyright.text3'
  | 'copyright.text4';

export const useImprint = () => {
  return useTranslation<'translation' | 'ImprintPages', ImprintKeys>('ImprintPages');
};
