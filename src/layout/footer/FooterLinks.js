import React from 'react'
import { footerSections } from './FooterData'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

const FooterLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="col-9">
    <div className="row">
      {footerSections.map((section, index) => (
        <div
          key={index}
          className="col-md-4 col-6 col-small"
        >
          <div
            className={`footer-widget widget_nav_menu wow fadeInUp delay-${section.animationDelay}`}
          >
            <h4 className="footer-title">{t(section.title)}</h4>
            <ul className="list-style-two">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link legacyBehavior   href={link.href}>
                    <a> {t(link.text)}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
      </div>
  )
}

export default FooterLinks
