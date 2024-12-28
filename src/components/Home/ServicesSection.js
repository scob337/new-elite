import { useTranslation } from "react-i18next";

const servicesContent = {
    title: "Elite's Core Services",
    subtitle: "What We Provide",
    services: [
      {
        title: "Digital Marketing",
        image: "assets/images/services/service1.png",
        list: [
          "Paid Marketing",
          "CRO",
          "Content Marketing",
          "Email Marketing",
          "SMO",
        ],
      },
      {
        title: "Mobile Application",
        image: "assets/images/services/service2.png",
        list: [
          "Unique UI Design",
          "Clean Development",
          "Swift",
          "Kotlin",
          "React Native",
        ],
      },
      {
        title: "Web Development",
        image: "assets/images/services/service3.png",
        list: [
          "Development Consulting",
          "UX/UI Cool Design",
          "Software Engineering",
          "Product Development",
          "Enhancement",
        ],
      },
      {
        title: "Technical Support",
        image: "assets/images/services/service4.png",
        list: [
          "Security Management",
          "Automated Deployments",
          "Incident Management (SLA)",
          "Compliance Monitoring",
          "CI/CD and DevOps",
        ],
      },
    ],
  };
  
  const ServicesSection = () => {
        const { t } = useTranslation();
    
    return (
      <section className="services-area-two rel z-2">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">{t(servicesContent.subtitle)}</span>
            <h2>{t(servicesContent.title)}</h2>
          </div>
          <div className="row justify-content-center">
            {servicesContent.services.map((service, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className={`service-item-two wow fadeInUp delay-${0.2 * (index + 1)}s`}
                >
                  <div className="image">
                    <img src={service.image} alt="Service" />
                  </div>
                  <div className="content">
                    <h4 className="title">{t(service.title)}</h4>
                    <ul className="list-style-three">
                      {service.list.map((item, i) => (
                        <li key={i}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  