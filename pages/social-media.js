import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Next_Prev_services from "@/src/components/Next_Prev_services";


const SocialMediaManagement = () => {
  const { t } = useTranslation();
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
                            <Head>
                                      <title>Elite-Agency | Social Media</title>
                                      <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                                      <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                                      <meta name="author" content="اسمك" />
                                      <meta property="og:title" content="صفحة رئيسية رائعة" />
                                      <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                                      <meta property="og:image" content="/path-to-your-image.jpg" />
                                      <meta property="og:url" content="https://yourwebsite.com" />
                                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                    </Head>
      <PageBanner pageName={"Social Media Management Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <article className="container">
          <article className="row gap-100">
            <article className="col-lg-8">
              <article className="service-details-content">
                <article className="section-title mb-30">
                  <h2>{t('Expert Social Media Management Services to Grow Your Brand')}</h2>
                </article>
                <p>
                  {t('At Elite, we specialize in creating and executing social media strategies that help businesses grow their online presence and engage with their audience. Our services include content creation, community management, social media advertising, and more.')}
                </p>
                <article className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    loading="lazy"
                    src="assets/images/services/service-details.jpg"
                    alt="Social Media Management Services"
                  />
                </article>
                <article className="row">
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>{t('Why Social Media is Crucial for Your Business Growth')}</h3>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>{t('Increase Brand Awareness and Reach a Larger Audience')}</li>
                      <li>{t('Engage Directly with Customers and Build a Loyal Community')}</li>
                      <li>{t('Drive Traffic to Your Website and Boost Conversions')}</li>
                    </ul>
                  </article>
                </article>
                <article className="row pb-30">
                  <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      {t('Social media is one of the most effective ways to connect with your audience and build your brand. We stay on top of the latest trends to ensure that your social media efforts are aligned with your business goals and optimized for maximum impact.')}
                    </p>
                  </article>
                  <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <article className="image">
                      <img
                      loading="lazy"
                        src="assets/images/services/service-middle.jpg"
                        alt="Social Media Strategy"
                      />
                    </article>
                  </article>
                </article>
                <h3>{t('Our Social Media Management Strategy and Process')}</h3>
                <p>
                  {t('Our social media strategy is tailored to help your business stand out in a crowded market. We take a holistic approach, from creating engaging content to running effective ad campaigns, ensuring your brand resonates with your audience and drives measurable results.')}
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
                    prevTitle={"Graphic Design"}
                    prevLink={"/graphic-design"}
                    nextTitle={"Digital Marketing"}
                    nextLink={"/digital-marketing"}
                  />
    </Layout>
  );
};
export default SocialMediaManagement;
