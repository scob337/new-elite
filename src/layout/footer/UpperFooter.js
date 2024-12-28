import Link from 'next/link'
import React from 'react'
import FooterLinks from './FooterLinks'
import { useTranslation } from 'react-i18next';

const UpperFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
    <div className="row medium-gap">
      <div className="col-xl-3 col-sm-6">
        <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
          <div className="footer-logo mb-30 ">
            <Link legacyBehavior   href="/">
              <a>
                <img  loading="lazy" src="assets/images/logos/logo-one.png" alt="Logo" />
              </a>
            </Link>
          </div>
          <p>
            {t('FooterLogoDesc')}
          </p>
          <Link legacyBehavior   href="/about">
            <a className="read-more">
            {t('FooterLogoLearnMore')} <i className="fas fa-long-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
        
        <FooterLinks/>

    </div>
  </div>
  )
}

export default UpperFooter
