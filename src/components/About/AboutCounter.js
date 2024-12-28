import React from 'react';
import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';



const statisticsData = [
  {
    icon: "flaticon-target",
    count: 2563,
    title: "Projects Completed",
  },
  {
    icon: "flaticon-target-audience",
    count: 98.9,
    decimals: 1,
    title: "Client Satisfaction",
  },
  {
    icon: "flaticon-customer-experience",
    count: 35.6,
    decimals: 1,
    title: "Years of Experience",
  },
  {
    icon: "flaticon-medal",
    count: 63,
    title: "Award-Winning Services",
  }
];
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const StatisticsComponent = () => {
const { t } = useTranslation();
  return (
    <section className="statistics-area-two rel z-2">
      <article className="container">
        <article
          className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
          style={{
            backgroundImage: "url(assets/images/background/statistics.jpg)",
          }}
        >
          <article className="row align-items-xl-start align-items-center">
            <article className="col-xl-5 col-lg-6">
              <article className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <article className="section-title mb-30">
                  <span className="sub-title mb-15">{t('Company Statistics')}</span>
                  <h2>{t('Learn About Our Company Statistics')}</h2>
                </article>
                <a href="/about" className="read-more">
                  {t('Learn More')} <i className="fas fa-long-arrow-right" />
                </a>
              </article>
            </article>
            <article className="col-xl-7 col-lg-6">
              <article className="row">
                {statisticsData.map((stat, index) => (
                  <article key={index} className="col-xl-3 col-small col-6">
                    <article
                      className={`counter-item counter-text-wrap wow fadeIn${
                        index % 2 === 0 ? "Down" : "Up"
                      } delay-0-3s`}
                    >
                      <i className={stat.icon} />
                      <span className="count-text plus" data-speed={3000} data-stop={stat.count}>
                        <Counter end={stat.count} decimals={stat.decimals || 0} />
                      </span>
                      <span className="counter-title">{t(stat.title)}</span>
                    </article>
                  </article>
                ))}
              </article>
            </article>
          </article>
        </article>
      </article>
    </section>
  );
};

export default StatisticsComponent;
