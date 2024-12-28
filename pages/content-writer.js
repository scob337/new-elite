import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const accordionTitle = [
    { id: 1, title: "Why Choose Our Content Writing Services?" },
    { id: 2, title: "How Our Writers Deliver Quality Content?" },
    { id: 3, title: "Learn More About Our Content Writing Process" },
    { id: 4, title: "Payment Methods for Our Writing Services" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our content writers have a proven track record of delivering high-quality, engaging content that resonates with your target audience. They are skilled in various writing styles, including blog posts, articles, and infographics, and are trained to create content that is both informative and entertaining."
    },
    {
      id: 2,
      content: "Our content writers are passionate about creating engaging content that resonates with your target audience. They use their extensive knowledge of various writing styles and techniques to craft content that is both informative and entertaining. They also have the ability to adapt their writing style based on the reader's preferences and feedback."
    },
    {
      id: 3,
      content: "Our content writing process begins with a thorough research phase to identify the target audience, their interests, and their pain points. We then create a content strategy that outlines the content topics, tone, and structure required to effectively communicate your brand's message to your target audience."
    },
    {
      id: 4,
      content: "Our content writers are certified in various writing styles, including blog posts, articles, and infographics, and are trained to create content that is both informative and entertaining. They also have the ability to adapt their writing style based on the reader's preferences and feedback."
    }
  ]
  return (
    <Layout>
      <Head>
          <title>Elite-Agency | Content Writing</title>
          <meta name="description" content="هذا وصف لصفحتك الرائعة." />
          <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
          <meta name="author" content="اسمك" />
          <meta property="og:title" content="صفحة رئيسية رائعة" />
          <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      <PageBanner pageName={"Content Writing"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
          <div className="col-lg-8">
  <div className="service-details-content">
    <div className="section-title mb-30">
      <h2>{t('Content Writing Services')}</h2>
    </div>
    <p>
      {t('At Elite, we offer professional content writing services designed to elevate your brands presence and engage your target audience effectively. Our team specializes in creating compelling, SEO-friendly, and tailored content to meet your business needs.')}
    </p>
    <div className="image my-40 wow fadeInUp delay-0-2s">
      <img
        src="assets/images/services/service-details.jpg"
        alt="Service Details"
      />
    </div>
    <div className="row">
      <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
        <h3>{t('Empowering Your Brand with Quality Content')}</h3>
      </div>
      <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
        <ul className="list-style-one">
          <li>{t('SEO-Optimized Blog Posts')}</li>
          <li>{t('Creative Copywriting')}</li>
          <li>{t('Comprehensive Content Strategies')}</li>
        </ul>
      </div>
    </div>
    <div className="row pb-30">
      <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
        <p>
          {t('Our expertise lies in crafting content that resonates with your audience, builds trust, and drives meaningful engagement. Whether its for your website, social media, or marketing campaigns, we deliver quality and consistency.')}
        </p>
      </div>
      <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
        <div className="image">
          <img
            src="assets/images/services/service-middle.jpg"
            alt="Service"
          />
        </div>
      </div>
    </div>
    <h3>{t('Service Management')}</h3>
    <p>
      {t('We understand the importance of aligning content with your brand’s voice and objectives. Our streamlined process ensures timely delivery and exceptional quality, helping your business stand out in a competitive landscape.')}
    </p>
    <div
      className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
      id="faq-accordion"
    >

      <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent}/>

    </div>
  </div>
</div>


            <ServiceAside/>

          </div>
        </div>
      </section>
      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior  legacyBehavior href="services">
                    {t('SEO Optimization')}
                  </Link>
                </h4>
                <Link legacyBehavior  legacyBehavior href="/seo">
                  <a className="read-more">
                    {t('Read More')} <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior  legacyBehavior href="/services">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior  legacyBehavior href="services">
                   {t('Graphic Design')}
                  </Link>
                </h4>
                <Link legacyBehavior  legacyBehavior href="/graphic-design">
                  <a className="read-more">
                    {t('Read More')} <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;
