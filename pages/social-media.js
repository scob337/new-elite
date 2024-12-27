import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";

const SocialMediaManagement = () => {
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Social Media Management Services?" },
    { id: 2, title: "How Our Social Media Experts Drive Results?" },
    { id: 3, title: "Our Proven Social Media Strategy for Success" },
    { id: 4, title: "Affordable Social Media Management Packages" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our social media management services are designed to enhance your brand’s online presence. From content creation and community management to paid advertising, our strategies are tailored to boost engagement, increase followers, and drive results across platforms like Facebook, Instagram, Twitter, and LinkedIn."
    },
    {
      id: 2,
      content: "Our team of social media experts uses data-driven strategies to create engaging content, build a strong online community, and run targeted ads that generate results. Whether it’s through organic posts or paid campaigns, we ensure your brand stands out on social media."
    },
    {
      id: 3,
      content: "Our process starts with understanding your brand’s goals and target audience. We create a comprehensive social media strategy, develop a content calendar, and execute campaigns to maximize engagement, grow your following, and increase conversions."
    },
    {
      id: 4,
      content: "We offer flexible and transparent pricing for our social media management services. Whether you are a startup or an established brand, we provide customized packages to suit your needs, ensuring you get the best value for your investment."
    }
  ];

  return (
    <Layout>
      <PageBanner pageName={"Social Media Management Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Expert Social Media Management Services to Grow Your Brand</h2>
                </div>
                <p>
                  At Elite, we specialize in creating and executing social media strategies that help businesses grow their online presence and engage with their audience. Our services include content creation, community management, social media advertising, and more.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Social Media Management Services"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>Why Social Media is Crucial for Your Business Growth</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Increase Brand Awareness and Reach a Larger Audience</li>
                      <li>Engage Directly with Customers and Build a Loyal Community</li>
                      <li>Drive Traffic to Your Website and Boost Conversions</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Social media is one of the most effective ways to connect with your audience and build your brand. We stay on top of the latest trends to ensure that your social media efforts are aligned with your business goals and optimized for maximum impact.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Social Media Strategy"
                      />
                    </div>
                  </div>
                </div>
                <h3>Our Social Media Management Strategy and Process</h3>
                <p>
                  Our social media strategy is tailored to help your business stand out in a crowded market. We take a holistic approach, from creating engaging content to running effective ad campaigns, ensuring your brand resonates with your audience and drives measurable results.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent}/>
                </div>
              </div>
            </div>

            <ServiceAside />
          </div>
        </div>
      </section>

      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="Content Writing"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/content-writing">
                    Content Writing
                  </Link>
                </h4>
                <Link legacyBehavior href="/content-writing">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>

            <Link legacyBehavior href="/services">
              <a className="show-all" />
            </Link>

            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/seo">
                    SEO optimization
                  </Link>
                </h4>
                <Link legacyBehavior href="/social-media-management">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Social Media Management Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SocialMediaManagement;
