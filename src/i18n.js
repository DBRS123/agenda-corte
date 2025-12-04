import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  // Remova a linha .use(I18NextPluralResolver)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    backend: {
        loadPath: '/agenda-corte/locales/{{lng}}/{{ns}}.json',
    },
    
    // 💡 IMPORTANTE: Mantenha esta lista para ajudar o i18next a carregar as regras de pluralização.
    supportedLngs: ['pt', 'en', 'es'], 
    lng: 'pt', 
  });

export default i18n;