import Link from "next/link";
import { useTranslation } from "react-i18next";

const servicesData = [
    {
      icon: "flaticon-agile",
      title: "Innovative App Development",
      description: "We provide innovative mobile and web app development solutions that leverage the latest technologies to meet market needs.",
      link: "web-development"
    },
    {
      icon: "flaticon-mission",
      title: "Content Writing",
      description: "We offer tailored tech solutions for your business, from designing integrated systems to enhancing IT infrastructure.",
      link: "content-writer"
    },
    {
      icon: "flaticon-mission-1",
      title: "Trusted Partner",
      description: "We act as trusted partners, helping you achieve your tech goals and expand your business in both local and global markets.",
      link: "services"
    }
  ];
  
  
  const ServicesSection = () => {
    const { t } = useTranslation();
    return (
      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <article className="container">
          <article className="row">
            {servicesData.map((service, index) => (
              <article className="col-lg-4 col-md-6" key={index}>
                <article className={`service-item-six wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                  <article className="icon">
                    <i className={service.icon} />
                  </article>
                  <h4>
                    <Link legacyBehavior  href={service.link}>
                      {t(service.title)}
                    </Link>
                  </h4>
                  <p>{t(service.description)}</p>
                </article>
              </article>
            ))}
          </article>
        </article>
      </section>
    );
  };
  export default ServicesSection