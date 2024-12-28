import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import JeenaHead from "@/src/layout/JeenaHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(storedLang);

    const direction = storedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction); 
  }, []);  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <JeenaHead />
      {loading && <Preloader />}
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </>
  );
}
