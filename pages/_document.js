import { useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import i18n from 'src/i18n'; // تأكد من مسار ملف i18n الخاص بك

export default function Document() {
  useEffect(() => {
    // يتم تعيين اتجاه النص بناءً على اللغة
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  }, [i18n.language]); // يتم تنفيذ التغيير عند تغيير اللغة

  return (
    <Html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
