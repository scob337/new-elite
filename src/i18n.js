import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../public/locales/en/translation.json';
import arTranslation from '../public/locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en', // في حال عدم وجود ترجمة للغة المطلوبة
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
