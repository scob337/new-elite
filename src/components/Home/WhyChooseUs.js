import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const services = [
  {
    id: "wc-tap1",
    link: "/uidesign",
    icon: "flaticon-creativity",
    title: "UX/UI Design",
    description:
      "Our experts help create the right website for across all major platforms and devices, ensuring an optimal user experience.",
    listItems: [
      "Comprehensive UI/UX Assessment",
      "Deep Contextual Research and 360° Planning",
      "Wireframing & Prototyping",
    ],
    image: "/assets/images/about/why-choose1.jpg",
  },
  {
    id: "wc-tap2",
    link: "/web-development",
    icon: "flaticon-test",
    title: "Apps Development",
    description:
      "We develop high-performing mobile and web applications tailored to your business needs.",
    listItems: [
      "Cross-Platform Development",
      "Innovative App Design",
      "Fast Performance Optimization",
    ],
    image: "/assets/images/about/why-choose1.jpg",
  },
  {
    id: "wc-tap4",
    icon: "flaticon-support",
    title: "Tech Support",
    description:
      "Our tech support team provides 24/7 assistance to ensure the smooth operation of your digital assets.",
    listItems: [
      "24/7 Customer Support",
      "Remote Troubleshooting",
      "Software Maintenance and Updates",
    ],
    image: "/assets/images/about/why-choose1.jpg",
  },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="why-choose-us-area py-130 rpy-100 rel z-1">
      <article className="container">
        <article className="row justify-content-center">
          <article className="col-xl-8">
            <article className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">{t('Why Choose Us')}</span>
              <h2>{t('Top-Notch Software Development and Digital Transformation')}</h2>
            </article>
          </article>
        </article>
        <Tab.Container defaultActiveKey="wc-tap1">
          <article className="why-choose-tab">
            <Nav as="ul" className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s">
              {services.map((service) => (
                <li className="nav-item" key={service.id}>
                  <Nav.Link as="a" eventKey={service.id} className="nav-link" data-bs-toggle="tab" href={`#${service.id}`}>
                    <i className={service.icon} /> <span>{t(service.title)}</span>
                  </Nav.Link>
                </li>
              ))}
            </Nav>
            <Tab.Content className="tab-content">
              {services.map((service) => (
                <Tab.Pane className="tab-pane fade" eventKey={service.id} key={service.id}>
                  <article className="row gap-90 align-items-center">
                    <article className="col-lg-6">
                      <article className="why-choose-image rmb-55">
                        <Image src={service.image} alt="Why Choose" width={500} height={300} loading="lazy" />
                      </article>
                    </article>
                    <article className="col-lg-6">
                      <article className="why-choose-content">
                        <h3>{t(service.title)}</h3>
                        <p>{t(service.description)}</p>
                        <ul className="list-style-one pt-5">
                          {service.listItems.map((item, index) => (
                            <li key={index}>{t(item)}</li>
                          ))}
                        </ul>
                        <Link href={service.link || '#'} legacyBehavior>
                          <a className="theme-btn mt-30">
                            {t('Learn More')} <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </article>
                    </article>
                  </article>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </article>
        </Tab.Container>
      </article>
      <article className="why-choose-shapes">
        <Image className="shape one" src="/assets/images/about/why-choose-shape1.png" alt="Shape" width={100} height={100} loading="lazy" />
        <Image className="shape two" src="/assets/images/about/why-choose-shape2.png" alt="Shape" width={100} height={100} loading="lazy" />
      </article>
    </section>
  );
};

export default WhyChooseUs;
