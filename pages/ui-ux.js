import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "react-i18next";
const UIUXDesign = () => {
  const { t } = useTranslation();
  const accordionTitle = [
    { id: 1, title: "Why Choose Our UI/UX Design Services?" },
    { id: 2, title: "How Our UI/UX Designers Create Intuitive Experiences?" },
    { id: 3, title: "Our Proven UI/UX Design Process" },
    { id: 4, title: "Affordable UI/UX Design Packages and Solutions" },
  ];
  const accordionContent = [
    {
      id: 1,
      content:
        "Our UI/UX design services are tailored to create visually appealing, functional, and user-centered designs. We focus on delivering seamless user experiences by combining aesthetic design with usability, ensuring that your product is not only beautiful but also easy to use.",
    },
    {
      id: 2,
      content:
        "Our team of UI/UX designers uses a blend of user research, wireframing, prototyping, and user testing to create designs that meet the needs of your target audience. We strive to enhance the usability, accessibility, and interaction of your digital product to improve user satisfaction and retention.",
    },
    {
      id: 3,
      content:
        "Our process starts with understanding your target users, business goals, and brand identity. We then create wireframes, mockups, and prototypes to visualize the design and functionality before moving to development. This ensures that your product delivers the best user experience possible.",
    },
    {
      id: 4,
      content:
        "We offer flexible pricing for our UI/UX design packages, catering to businesses of all sizes. Whether you're a startup or a large enterprise, we tailor our solutions to fit your budget while delivering high-quality, user-centric designs that boost engagement and conversion rates.",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Elite-Agency | UI/UX</title>
        <meta name="description" content="هذا وصف لصفحتك الرائعة." />
        <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
        <meta name="author" content="اسمك" />
        <meta property="og:title" content="صفحة رئيسية رائعة" />
        <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageBanner pageName={"UI/UX Design Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>
                    {t(
                      "Professional UI/UX Design Services to Enhance User Experience"
                    )}
                  </h2>
                </div>
                <p>
                  {t(
                    "At Elite, we specialize in creating beautiful and intuitive user interfaces and experiences. Our UI/UX design services include user research, wireframing, prototyping, and usability testing to ensure your digital products engage users and meet their needs."
                  )}
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    loading="lazy"
                    src="assets/images/services/service-details.jpg"
                    alt="UI/UX Design Services"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>
                      {t(
                        "Why UI/UX Design is Crucial for Your Digital Product"
                      )}
                    </h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>{t("Improve User Engagement and Retention")}</li>
                      <li>
                        {t("Create Visually Appealing and Functional Designs")}
                      </li>
                      <li>{t("Enhance Usability and Accessibility")}</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      {t(
                        "A well-designed UI/UX is essential for making a positive first impression with your users. Whether youre developing a website, mobile app, or web application, our team ensures your product is easy to use and visually appealing, helping you achieve higher user satisfaction and better conversion rates."
                      )}
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        loading="lazy"
                        src="assets/images/services/service-middle.jpg"
                        alt="UI/UX Design Process"
                      />
                    </div>
                  </div>
                </div>
                <h3>{t("Our UI/UX Design Strategy and Process")}</h3>
                <p>
                  {t(
                    "We follow a user-centered design approach to ensure that every aspect of your product meets the needs and expectations of your target audience. From wireframes to prototypes, we iterate and refine the design to ensure it’s intuitive and easy to navigate."
                  )}
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion
                    accordionsTitle={accordionTitle}
                    accordionContent={accordionContent}
                  />
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
                  alt="Web Development"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/web-development">
                      <a>{t("Web Development")}</a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/web-development">
                  <a className="read-more">
                    {t("Read More")} <i className="fal fa-angle-double-right" />
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
                  <Link legacyBehavior href="/ui-ux-design">
                    <a>{t("UI/UX Design")}</a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/ui-ux-design">
                  <a className="read-more">
                    {t("Read More")} <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  loading="lazy"
                  src="assets/images/services/service-next.jpg"
                  alt="UI/UX Design Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default UIUXDesign;
