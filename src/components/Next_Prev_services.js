import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Next_Prev_services = ({
  prevTitle = "",
  prevUrl = "/Services",
  nextTitle = "",
  nextUrl = "/Services",
}) => {
  const { t } = useTranslation();

  return (
    <article className="next-prev-service pb-80 rpb-50">
      <article className="container">
        <hr />
        <article className="next-prev-service mt-80">
          {/* Previous Service */}
          <article className="next-prev-item wow fadeInLeft delay-0-2s">
            <article className="image">
              <img
                src="assets/images/services/service-prev.jpg"
                alt="Web Development"
              />
            </article>
            <article className="content">
              <h4>
                <Link legacyBehavior href={prevUrl}>
                  <a>{t(prevTitle)}</a>
                </Link>
              </h4>
              <Link legacyBehavior href={prevUrl}>
                <a className="read-more">
                  {t('Read More')} <i className="fal fa-angle-double-right" />
                </a>
              </Link>
            </article>
          </article>

          {/* Back to Services */}
          <Link legacyBehavior href="/services">
            <a className="show-all"></a>
          </Link>

          {/* Next Service */}
          <article className="next-prev-item wow fadeInRight delay-0-2s">
            <article className="content">
              <h4>
                <Link legacyBehavior href={nextUrl}>
                  <a>{t(nextTitle)}</a>
                </Link>
              </h4>
              <Link legacyBehavior href={nextUrl}>
                <a className="read-more">
                  {t('Read More')} <i className="fal fa-angle-double-right" />
                </a>
              </Link>
            </article>
            <article className="image">
              <img
                src="assets/images/services/service-next.jpg"
                alt="Mobile App Development Services"
              />
            </article>
          </article>
        </article>
      </article>
    </article>
  );
};

export default Next_Prev_services;
