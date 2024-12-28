import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'; 
const HomeBanner = () => {
  const { t } = useTranslation();
  return (
    <article className="row align-items-center" >
    <article className="col-lg-8">
      <article className="hero-content-two pt-155 pb-160 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
        <span className="sub-title">{t("HTitle")}</span>
        <h1>{t("Hdescription")}</h1>
        <Link legacyBehavior   href="/about">
          <a className="theme-btn mt-25 wow fadeInUp delay-0-6s">
            {t('Let’s Get Started')} <i className="fas fa-long-arrow-right" />
          </a>
        </Link>
      </article>
    </article>
    <article className="col-lg-4 col-md-6 col-sm-8 col-10 col-small">
      <article className="hero-gradient-circle">
        <article className="icon">
          <img
          loading="lazy"
            src="assets/images/hero/hero-circle-icon.png"
            alt="Icon"
          />
        </article>
      </article>
    </article>
  </article>
  )
}

export default HomeBanner
