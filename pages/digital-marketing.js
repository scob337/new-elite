import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion } from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";

const DigitalMarketing = () => {
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Digital Marketing Services?" },
    { id: 2, title: "How Our Digital Marketing Experts Drive Results?" },
    { id: 3, title: "Our Proven Digital Marketing Process for Success" },
    { id: 4, title: "Affordable Digital Marketing Packages and Solutions" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our digital marketing services are tailored to boost your brand’s online presence. From SEO and social media marketing to paid advertising and content marketing, our strategies are designed to deliver measurable results. We focus on driving targeted traffic, enhancing user engagement, and increasing conversions."
    },
    {
      id: 2,
      content: "Our team of digital marketing experts uses a combination of data-driven strategies, including SEO, PPC (pay-per-click), social media marketing, and email campaigns. By focusing on multi-channel marketing, we ensure your brand reaches its ideal audience across the web, driving engagement and ROI."
    },
    {
      id: 3,
      content: "Our process starts with understanding your business and target audience. We create a comprehensive digital marketing strategy, implement the latest marketing techniques, and optimize campaigns to maximize visibility, drive traffic, and convert leads into loyal customers."
    },
    {
      id: 4,
      content: "We offer competitive, flexible, and transparent pricing for our digital marketing packages. Whether you're a startup or an established business, we tailor our solutions to meet your unique needs, providing the best return on investment for your marketing efforts."
    }
  ];

  return (
    <Layout>
      <PageBanner pageName={"Digital Marketing Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Expert Digital Marketing Services to Grow Your Business Online</h2>
                </div>
                <p>
                  At Elite, we specialize in comprehensive digital marketing strategies to help businesses enhance their online presence. Our services include SEO, PPC, content marketing, social media, and email marketing. We aim to drive targeted traffic, increase conversions, and achieve long-term online success.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Digital Marketing Services"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>Why Digital Marketing is Crucial for Your Business Growth</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Increase Online Visibility and Brand Awareness</li>
                      <li>Drive Targeted Traffic to Your Website</li>
                      <li>Improve Lead Generation and Conversion Rates</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Digital marketing is essential for any business that wants to thrive in the competitive online marketplace. Our team stays ahead of industry trends, ensuring your business benefits from the most effective marketing strategies, including SEO, social media management, content creation, and more.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Digital Marketing Process"
                      />
                    </div>
                  </div>
                </div>
                <h3>Our Digital Marketing Strategy and Process</h3>
                <p>
                  We create customized digital marketing strategies designed to achieve your business objectives. Our process includes understanding your target audience, choosing the right marketing channels, and optimizing campaigns to drive conversions and grow your business.
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
                  <Link legacyBehavior href="/digital-marketing">
                    Digital Marketing
                  </Link>
                </h4>
                <Link legacyBehavior href="/digital-marketing">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Digital Marketing Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DigitalMarketing;
