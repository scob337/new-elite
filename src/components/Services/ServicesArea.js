import Link from "next/link";
import { useTranslation } from "react-i18next";

const services = [
    {
      icon: "flaticon-networking",
      title: "Digital Consulting",
      link: "/digital-marketing",
      description:
        "On the other hand, we denounce righteous indignation and dislike men who are demoralized by the charms of pleasure.",
      delay: "0-4s",
    },
    {
      icon: "flaticon-coding",
      title: "Design & Development",
      link: "web-development",
      description:
        "On the other hand, we denounce righteous indignation and dislike men who are demoralized by the charms of pleasure.",
      delay: "0-6s",
    },
    {
      icon: "flaticon-app-development",
      title: "Mobile App Solutions",
      link: "mobile-application",
      description:
        "On the other hand, we denounce righteous indignation and dislike men who are demoralized by the charms of pleasure.",
      delay: "0-3s",
    },
    {
      icon: "flaticon-logo",
      title: "UX/UI Design Strategy",
      link: "uidesign",
      description:
        "On the other hand, we denounce righteous indignation and dislike men who are demoralized by the charms of pleasure.",
      delay: "0-5s",
    },
    {
      icon: "flaticon-seo",
      title: "SEO Optimization",
      link: "seo",
      description:
        "On the other hand, we denounce righteous indignation and dislike men who are demoralized by the charms of pleasure.",
      delay: "0-7s",
    },
  ];
  
  const ServicesArea = () => {
    const { t } = useTranslation();
    return (
      <section className="services-area bgc-lighter pt-75 pb-10 rel z-1">
        <article className="container">
          <article className="row medium-gap">
            <article className="col-xl-4 col-md-6">
              <article className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">{t('Latest Services')}</span>
                <h2>{t('We Provide Best IT Services')}</h2>
              </article>
            </article>
            {services.map((service, index) => (
              <article className="col-xl-4 col-md-6" key={index}>
                <article className={`service-two-item wow fadeInUp delay-${service.delay}`}>
                  <article className="icon">
                    <i className={service.icon} />
                  </article>
                  <article className="content">
                    <h4>
                      <Link legacyBehavior  href={service.link}>
                        {t(service.title)}
                      </Link>
                    </h4>
                    <p>{t(service.description)}</p>
                  </article>
                </article>
              </article>
            ))}
          </article>
        </article>
      </section>
    );
  };
  
  export default ServicesArea;
  