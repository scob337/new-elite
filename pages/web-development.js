import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";

const WebDevelopment = () => {
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Web Development Services?" },
    { id: 2, title: "How Our Web Development Experts Deliver High-Quality Websites?" },
    { id: 3, title: "Our Proven Web Development Process" },
    { id: 4, title: "Affordable Web Development Packages and Solutions" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our web development services are tailored to build responsive, scalable, and user-friendly websites. Whether you're looking to create an e-commerce platform, a corporate website, or a custom web application, we use the latest technologies to create robust solutions."
    },
    {
      id: 2,
      content: "Our team of web development experts works with cutting-edge tools and frameworks like React, Angular, Node.js, and more. We focus on building fast, secure, and mobile-friendly websites to ensure your business performs well on all devices and platforms."
    },
    {
      id: 3,
      content: "Our process starts by understanding your business goals, target audience, and brand identity. We then design and develop a custom website that aligns with your objectives, integrating SEO best practices to help you rank higher in search results and attract more visitors."
    },
    {
      id: 4,
      content: "We offer competitive and transparent pricing for our web development packages. Whether you're a startup or a well-established business, we tailor our solutions to fit your budget and provide the best return on investment for your web development project."
    }
  ];

  return (
    <Layout>
      <PageBanner pageName={"Web Development Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Professional Web Development Services to Build Your Online Presence</h2>
                </div>
                <p>
                  At Elite, we specialize in building custom websites that deliver results. Our services include front-end and back-end development, web design, e-commerce solutions, and CMS development. We focus on creating websites that are fast, responsive, and user-friendly.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Web Development Services"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>Why Web Development is Key to Your Business Growth</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Build a Strong Online Presence</li>
                      <li>Enhance User Experience and Engagement</li>
                      <li>Optimize for Mobile and Desktop Devices</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Having a professional website is crucial in today's digital landscape. A well-designed and functional website not only helps you attract new customers but also keeps them engaged and coming back. Our team ensures that every project meets the highest standards of design and performance.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Web Development Process"
                      />
                    </div>
                  </div>
                </div>
                <h3>Our Web Development Strategy and Process</h3>
                <p>
                  We follow a structured process to ensure the success of every project. From ideation and wireframing to development and testing, our team works closely with you to create a website that meets your needs and exceeds your expectations.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent} />
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
                  alt="Mobile Application"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/mobile-application">
                    Mobile Application Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/mobile-application">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>

            <Link legacyBehavior href="/services2">
              <a className="show-all" />
            </Link>

            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/web-development">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/web-development">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WebDevelopment;
