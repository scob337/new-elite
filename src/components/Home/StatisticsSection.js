import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const statisticsData = [
  {
    id: 1,
    title: "Years Of Experience",
    value: 35,
    description: "Over 20 years of experience and 850+ employees",
  },
  {
    id: 2,
    title: "Projects Completed",
    value: 693,
    description: "Successfully delivered across various industries",
  },
  {
    id: 3,
    title: "Client Satisfaction",
    value: 98,
    description: "Customer satisfaction rate based on feedback",
  },
];

const StatisticsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="statistics-area-two rel z-2 mb-130 rmb-100">
      <article className="container">
        <article className="row justify-content-center">
          <article className="col-xl-6 col-lg-8">
            <article className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">{t('Company Statistics Database')}</span>
              <h2>{t('5,000+ Completed Projects in 41+ Countries')}</h2>
            </article>
          </article>
        </article>
        <article className="row no-gap justify-content-center">
          {statisticsData.map(({ id, title, value, description }) => (
            <article className="col-xl-4 col-md-6" key={id}>
              <article className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                <article className="icon">
                  <i className="flaticon-target" />
                </article>
                <article className="content">
                  <span className="count-text plus" data-speed={3000} data-stop={value}>
                    <Counter end={value} />
                  </span>
                  <span className="counter-title">{t(title)}</span>
                  <p>{t(description)}</p>
                </article>
              </article>
            </article>
          ))}
        </article>
      </article>
    </section>
  );
};

export default StatisticsSection;
