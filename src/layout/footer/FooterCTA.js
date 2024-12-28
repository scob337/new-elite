import Link from 'next/link'
import React from 'react'
import { useTranslation } from "react-i18next";

const FooterCTA = () => {
  const { t } = useTranslation();

  return (
    <article className="footer-cta-wrap">
    <article className="container">
      <article
        className="footer-cta-inner bgs-cover"
        style={{
          backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
        }}
      >
        
        <article className="section-title wow fadeInLeft delay-0-2s">
          <span className="sub-title">{t('FooterCTATitle')}</span>
          <h2>{t('FooterCTAContent')}</h2>
        </article>
        <Link legacyBehavior  legacyBehavior href="/contact">
          <a className="theme-btn style-three wow fadeInRight delay-0-2s">
          {t('FooterCTAButton')} <i className="fas fa-long-arrow-right" />
          </a>
        </Link>
        <article className="hotline wow fadeInRight delay-0-2s">
          <i className="fas fa-phone" />
          <article className="content">
            <span>{t('FooterCTAHotline')}</span>
            <br />
            <a href="callto:+966559949013">+966 55 994 9013</a>
          </article>
        </article>
      </article>
    </article>
  </article>
  )
}

export default FooterCTA
