import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Next_Prev_services from "@/src/components/Next_Prev_services";
const MobileAppDevelopment = () => {
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Mobile App Development Services?" },
    { id: 2, title: "How Our Mobile App Development Experts Drive Results?" },
    { id: 3, title: "Our Proven Mobile App Development Process for Success" },
    { id: 4, title: "Affordable Mobile App Development Packages and Solutions" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our mobile app development services are designed to help you create innovative, user-friendly, and high-performing mobile applications. We specialize in both iOS and Android app development, focusing on seamless integration, scalability, and security to ensure your app delivers exceptional user experiences."
    },
    {
      id: 2,
      content: "Our team of mobile app developers uses cutting-edge technologies to create apps that are not only aesthetically pleasing but also functionally robust. From app design to development and deployment, we ensure that every step is aligned with your business goals, providing you with a top-quality mobile app."
    },
    {
      id: 3,
      content: "Our process begins by understanding your business requirements and user needs. We design and develop apps with a focus on performance, security, and usability. After development, we conduct thorough testing and optimization to deliver an app that exceeds expectations."
    },
    {
      id: 4,
      content: "We offer flexible and competitive pricing for our mobile app development services. Whether you need a simple app or a more complex solution, we provide packages tailored to your needs, ensuring the best possible return on your investment."
    }
  ];
  const { t } = useTranslation();

  return (
    <Layout>
          <Head>
                    <title>Elite-Agency | Mobile App Development</title>
                    <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                    <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                    <meta name="author" content="اسمك" />
                    <meta property="og:title" content="صفحة رئيسية رائعة" />
                    <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                    <meta property="og:image" content="/path-to-your-image.jpg" />
                    <meta property="og:url" content="https://yourwebsite.com" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  </Head>
      <PageBanner pageName={"Mobile App Development Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <article className="container">
          <article className="row gap-100">
            <article className="col-lg-8">
              <article className="service-details-content">
                <article className="section-title mb-30">
                  <h2>{t('Expert Mobile App Development Services to Take Your Business Mobile')}</h2>
                </article>
                <p>
                  {t('At Elite, we specialize in building high-quality, custom mobile apps for iOS and Android. Our mobile app development services are tailored to meet the unique needs of your business, helping you reach a wider audience and provide a seamless mobile experience to your users.')}
                </p>
                <article className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Mobile App Development Services"
                  />
                </article>
                <article className="row">
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>{t('Why Mobile App Development is Crucial for Your Business Growth')}</h3>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>{t('Enhance Customer Engagement with Mobile Accessibility')}</li>
                      <li>{t('Streamline Operations and Improve Efficiency')}</li>
                      <li>{t('Reach a Broader Audience Across Platforms')}</li>
                    </ul>
                  </article>
                </article>
                <article className="row pb-30">
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      {t('Mobile apps are an essential tool for modern businesses to stay competitive. They offer your customers convenience, accessibility, and direct communication. With our expertise, we ensure that your app meets the highest standards of design, functionality, and performance.')}
                    </p>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <article className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Mobile App Development Process"
                      />
                    </article>
                  </article>
                </article>
                <h3>{t('Our Mobile App Development Strategy and Process')}</h3>
                <p>
                  {t('Our development process focuses on understanding your target audience, business goals, and technical requirements. We offer end-to-end mobile app development services, from idea conceptualization to post-launch support, ensuring that your app performs optimally at every stage.')}
                </p>
                <article
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent}/>
                </article>
              </article>
            </article>

            <ServiceAside />
          </article>
        </article>
      </section>

      <Next_Prev_services 
                    prevTitle={"Web Development"}
                    prevLink={"/web-development"}
                    nextTitle={"Content Writing"}
                    nextLink={"/content-writing"}
                  />
    </Layout>
  );
};
export default MobileAppDevelopment;
