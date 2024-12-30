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
        <article className="container">
          <article className="row align-items-center justify-content-between">
            <article className="col-xl-5 col-lg-6">
              <article className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <article className="section-title mb-15">
                  <span className="sub-title mb-15">{t(customerSatisfactionContent.title)}</span>
                  <h2>{t(customerSatisfactionContent.subtitle)}</h2>
                </article>
                <p>{t(customerSatisfactionContent.description)}</p>
                <article className="row pt-15">
                  {customerSatisfactionContent.services.map((service, index) => (
                    <article key={index} className="col-sm-6">
                      <article className="service-item style-two">
                        <article className="icon">
                          <i className={service.icon} />
                        </article>
                        <h4>
                            {t(service.title)}
                        </h4>
                      </article>
                    </article>
                  ))}
                </article>
              </article>
            </article>
            <article className="col-lg-6">
              <article className="cs-image-part mb-30 wow fadeInRight delay-0-2s">
                <a
                  href={customerSatisfactionContent.videoLink}
                  className="mfp-iframe video-play style-two"
                  tabIndex={0}
                >
                  <i className="fas fa-play" />
                </a>
                <article className="image">
                  <img  loading="lazy" src={customerSatisfactionContent.image} alt="Satisfaction" />
                </article>
                <article className="experience-years">
                  <h4>{t(customerSatisfactionContent.experienceYears)}</h4>
                  <img
                  loading="lazy"
                    src={customerSatisfactionContent.authorImage}
                    alt="Author"
                  />
                </article>
              </article>
            </article>
          </article>
        </article>
      </section>
    );
  };
  
  export default CustomerSatisfactionSection;
  