import React from 'react'
import ServicesLinks from './ServicesLinks'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

const ServiceAside = () => {
  const { t } = useTranslation();
  return (
    <article className="col-lg-4">
    <article className="service-sidebar">
      <article className="widget widget-category wow fadeInUp delay-0-2s">
        <h4 className="widget-title">{t('Services Category')}</h4>
          <ServicesLinks/>
      </article>
      <article
        className="widget widget-cta"
        style={{
          backgroundImage:
            "url(assets/images/widgets/cta-widget-bg.jpg)",
        }}
      >
        <span className="h5">{t('Lets Work Together')}</span>
        <h2>{t('Elite  Agency')}</h2>
        <Link legacyBehavior   href="/contact">
          <a className="theme-btn style-four">
            {t('Contact Us')} <i className="fas fa-angle-double-right" />
          </a>
        </Link>
        <br />
        <a href="callto:+966559949013" className="number">
          <i className="fas fa-phone" /> +966 55 994 9013
        </a>
        <img
        loading="lazy"
          className="bg-shape"
          src="assets/images/widgets/cta-bg-lines.png"
          alt="Shape"
        />
      </article>
      <article className="widget widget-download wow fadeInUp delay-0-2s">
        <h4 className="widget-title">{t('Download')}</h4>
        <ul>
        <li>
  <Link legacyBehavior  href="/assets/Profile.pdf" >
    <a download>
      {t('Download PDF')} <i className="far fa-file-pdf" />
    </a>
  </Link>
</li>


        </ul>
      </article>
    </article>
  </article>
  )
}

export default ServiceAside
