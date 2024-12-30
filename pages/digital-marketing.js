import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Next_Prev_services from "@/src/components/Next_Prev_services";

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
const { t } = useTranslation();
  return (
    <Layout>
            <Head>
                <title>Elite-Agency | Digital Marketing</title>
                <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                <meta name="author" content="اسمك" />
                <meta property="og:title" content="صفحة رئيسية رائعة" />
                <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                <meta property="og:image" content="/path-to-your-image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              </Head>
      <PageBanner pageName={"Digital Marketing Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <article className="container">
          <article className="row gap-100">
            <article className="col-lg-8">
              <article className="service-details-content">
                <article className="section-title mb-30">
                  <h2>{t('Expert Digital Marketing Services to Grow Your Business Online')}</h2>
                </article>
                <p>
                  {t('At Elite, we specialize in comprehensive digital marketing strategies to help businesses enhance their online presence. Our services include SEO, PPC, content marketing, social media, and email marketing. We aim to drive targeted traffic, increase conversions, and achieve long-term online success.')}
                </p>
                <article className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Digital Marketing Services"
                  />
                </article>
                <article className="row">
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>{t('Why Digital Marketing is Crucial for Your Business Growth')}</h3>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>{t('Increase Online Visibility and Brand Awareness')}</li>
                      <li>{t('Drive Targeted Traffic to Your Website')}</li>
                      <li>{t('Improve Lead Generation and Conversion Rates')}</li>
                    </ul>
                  </article>
                </article>
                <article className="row pb-30">
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      {t('Digital marketing is essential for any business that wants to thrive in the competitive online marketplace. Our team stays ahead of industry trends, ensuring your business benefits from the most effective marketing strategies, including SEO, social media management, content creation, and more.')}
                    </p>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <article className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Digital Marketing Process"
                      />
                    </article>
                  </article>
                </article>
                <h3>{t('Our Digital Marketing Strategy and Process')}</h3>
                <p>
                  {t('We create customized digital marketing strategies designed to achieve your business objectives. Our process includes understanding your target audience, choosing the right marketing channels, and optimizing campaigns to drive conversions and grow your business.')}
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
                    prevTitle={"Video Editing"}
                    prevLink={"/video-editing"}
                    nextTitle={"Social Media "}
                    nextLink={"/social-media"}
                  />
    </Layout>
  );
};
export default DigitalMarketing;
