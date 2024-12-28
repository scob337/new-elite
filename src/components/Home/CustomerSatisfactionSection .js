import { useTranslation } from "react-i18next";

const customerSatisfactionContent = {
    title: "Guaranteed Customer Satisfaction",
    subtitle: "Ideate, Design, And Fuel Business Growth",
    description:
      "With extensive experience in digital marketing, Elite has helped businesses grow by creating tailored marketing strategies and delivering exceptional results. Our team is dedicated to ensuring customer satisfaction through personalized approaches and comprehensive solutions that address the unique needs of each client.",
    services: [
      {
        icon: "flaticon-trust",
        title: "Best Trusted Partner",
      },
      {
        icon: "flaticon-technical-support",
        title: "24/7 Technical Support",
      },
    ],
    experienceYears: "25 Years Of Experience In Marketing Solutions",
    videoLink: "https://www.youtube.com/watch?v=9Y7ma241N8k",
    image: "assets/images/about/satisfaction.jpg",
    authorImage: "assets/images/about/satisfaction-author.png",
  };
  
  const CustomerSatisfactionSection = () => {
    const { t } = useTranslation();
    return (
      <section className="customer-satisfaction-area py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">{t(customerSatisfactionContent.title)}</span>
                  <h2>{t(customerSatisfactionContent.subtitle)}</h2>
                </div>
                <p>{customerSatisfactionContent.description}</p>
                <div className="row pt-15">
                  {customerSatisfactionContent.services.map((service, index) => (
                    <div key={index} className="col-sm-6">
                      <div className="service-item style-two">
                        <div className="icon">
                          <i className={service.icon} />
                        </div>
                        <h4>
                            {t(service.title)}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part mb-30 wow fadeInRight delay-0-2s">
                <a
                  href={customerSatisfactionContent.videoLink}
                  className="mfp-iframe video-play style-two"
                  tabIndex={0}
                >
                  <i className="fas fa-play" />
                </a>
                <div className="image">
                  <img  loading="lazy" src={customerSatisfactionContent.image} alt="Satisfaction" />
                </div>
                <div className="experience-years">
                  <h4>{t(customerSatisfactionContent.experienceYears)}</h4>
                  <img
                    src={customerSatisfactionContent.authorImage}
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CustomerSatisfactionSection;
  