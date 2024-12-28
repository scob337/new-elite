import Link from 'next/link';
import React from 'react'
import { Nav, Tab } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const services = [
    {
      id: "wc-tap1",
      icon: "flaticon-creativity",
      title: "UX/UI Design",
      description:
        "Our experts help create the right website for across all major platforms and devices, ensuring an optimal user experience.",
      listItems: [
        "Comprehensive UI/UX Assessment",
        "Deep Contextual Research and 360° Planning",
        "Wireframing & Prototyping",
      ],
      image: "assets/images/about/why-choose1.jpg",
    },
    {
      id: "wc-tap2",
      icon: "flaticon-test",
      title: "Apps Development",
      description:
        "We develop high-performing mobile and web applications tailored to your business needs.",
      listItems: [
        "Cross-Platform Development",
        "Innovative App Design",
        "Fast Performance Optimization",
      ],
      image: "assets/images/about/why-choose1.jpg",
    },
    {
      id: "wc-tap3",
      icon: "flaticon-cyber-security-1",
      title: "Cyber Security",
      description:
        "Protect your data and online presence with our robust cybersecurity services.",
      listItems: [
        "Advanced Threat Protection",
        "Security Audits and Monitoring",
        "Data Encryption & Backup",
      ],
      image: "assets/images/about/why-choose1.jpg",
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
      image: "assets/images/about/why-choose1.jpg",
    },
  ];
  
const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
<section className="why-choose-us-area py-130 rpy-100 rel z-1">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-8">
        <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">{t('Why Choose Us')}</span>
          <h2>{t('Top-Notch Software Development and Digital Transformation')}</h2>
        </div>
      </div>
    </div>
    <Tab.Container defaultActiveKey={"wc-tap1"}>
      <div className="why-choose-tab">
        <Nav
          as={"ul"}
          className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
        >
          {services.map((service) => (
            <li className="nav-item" key={service.id}>
              <Nav.Link
                as="a"
                eventKey={service.id}
                className="nav-link"
                data-bs-toggle="tab"
                href={`#${service.id}`}
              >
                <i className={service.icon} /> <span>{t(service.title)}</span>
              </Nav.Link>
            </li>
          ))}
        </Nav>
        <Tab.Content className="tab-content">
          {services.map((service) => (
            <Tab.Pane className="tab-pane fade" eventKey={service.id} key={service.id}>
              <div className="row gap-90 align-items-center">
                <div className="col-lg-6">
                  <div className="why-choose-image rmb-55">
                    <img  loading="lazy" src={service.image} alt="Why Choose" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-choose-content">
                    <h3>{t(service.title)}</h3>
                    <p>{service.description}</p>
                    <ul className="list-style-one pt-5">
                      {service.listItems.map((item, index) => (
                        <li key={index}>{t(item)}</li>
                      ))}
                    </ul>
                    <Link legacyBehavior href="/about">
                      <a className="theme-btn mt-30">
                        {t('Learn More')} <i className="fas fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </div>
    </Tab.Container>
  </div>
  <div className="why-choose-shapes">
    <img
      className="shape one"
      src="assets/images/about/why-choose-shape1.png"
      alt="Shape"
    />
    <img
      className="shape two"
      src="assets/images/about/why-choose-shape2.png"
      alt="Shape"
    />
  </div>
</section>

  )
}

export default WhyChooseUs
