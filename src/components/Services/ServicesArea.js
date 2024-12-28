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
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Provide Best IT Services</h2>
              </div>
            </div>
            {services.map((service, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className={`service-two-item wow fadeInUp delay-${service.delay}`}>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior  href={service.link}>
                        {t(service.title)}
                      </Link>
                    </h4>
                    <p>{t(service.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesArea;
  