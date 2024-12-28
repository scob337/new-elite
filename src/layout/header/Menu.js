import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';

const NavLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const { i18n , t} = useTranslation();
  const [storedLang, setStoredLang] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    setStoredLang(lang);
    i18n.changeLanguage(lang);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
    setStoredLang(newLanguage);
    location.reload();
  };

  return (
    <nav className="main-menu navbar-expand-lg mobile-menu w-100 m-auto ">
      <Accordion>
        <article className={`navbar-header gap-5 d-flex  justify-content-between ${storedLang === 'ar' && 'flex-row-reverse'}`}>
          <article className="mobile-logo">
            <Link legacyBehavior  href="/">
                <img
                  src="assets/images/logos/logo-one.png"
                  alt="Logo"
                  title="Logo"
                />
            </Link>
          </article>

          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>

          <article className="menu-btns mx-3">
            <img
              onClick={toggleLanguage}
              src={`${i18n.language === 'en' ? 'assets/images/AR.svg' : 'assets/images/EN.svg'}`}
              alt="Language Icon"
              title={i18n.language === 'en' ? 'AR' : 'EN'}
              width={50}
              height={30}
              style={{ cursor: 'pointer', objectFit: 'cover' }}
            />
          </article>
        </article>

        <Accordion.Collapse eventKey="collapse" className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            {NavLinks.map((item, index) => (
              <li key={index} className={router.pathname === item.url ? "active" : ""}>
<Link legacyBehavior  href={item.url}>
  {t(item.name)}
</Link>
              </li>
            ))}
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = () => {
  const { i18n , t} = useTranslation();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
    location.reload();
  };

  return (
    <nav className="main-menu navbar-expand-lg desktop-menu mx-auto w-50">
      <article className="navbar-header w-100">
        <article className="mobile-logo">
          <Link legacyBehavior  href="/">
              <img
                src="assets/images/logos/logo-one.png"
                alt="Logo"
                title="Logo"
              />
          </Link>
        </article>

        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </article>

      <article className="navbar-collapse collapse d-flex ">
        <article className="d-flex justify-content-between w-100">
          <ul className="navigation clearfix d-flex">
            {NavLinks.map((item, index) => (
              <li key={index} className={router.pathname === item.url ? "active" : ""}>
<Link legacyBehavior  href={item.url}>
  {t(item.name)}
</Link>
              </li>
            ))}
          </ul>

        </article>
                  <article className="menu-btns mx-3 ">
            <img
              onClick={toggleLanguage}
              src={`${i18n.language === 'en' ? 'assets/images/AR.svg' : 'assets/images/EN.svg'}`}
              alt="Language Icon"
              title={i18n.language === 'en' ? 'AR' : 'EN'}
              width={50}
              height={30}
              style={{ cursor: 'pointer', objectFit: 'cover' }}
            />
          </article>
      </article>
    </nav>
  );
};

export default Menu;
