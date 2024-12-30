import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import ServiceAside from "@/src/components/ServiceAside";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Next_Prev_services from "@/src/components/Next_Prev_services";
const SEO = () => {
  const { t } = useTranslation();
  const accordionTitle = [
    { id: 1, title: "Why Choose Our SEO Services?" },
    { id: 2, title: "How Our SEO Experts Improve Your Rankings?" },
    { id: 3, title: "Our Proven SEO Process for Effective Results" },
    { id: 4, title: "Affordable SEO Packages and Payment Options" },
  ];
  const accordionContent = [
    {
      id: 1,
      content: "Our SEO services are designed to enhance your website’s visibility and drive organic traffic through proven strategies. We focus on optimizing your website with the best SEO practices, improving on-page elements, creating high-quality backlinks, and ensuring that your site ranks higher on search engine results pages (SERPs)."
    },
    {
      id: 2,
      content: "Our team of SEO experts uses a combination of technical SEO, on-page optimization, and off-page strategies to boost your website's ranking. We perform in-depth keyword research, optimize your site’s structure, enhance user experience, and implement SEO-friendly content strategies to maximize your website’s potential."
    },
    {
      id: 3,
      content: "Our SEO process starts with a comprehensive site audit, where we analyze the technical and content aspects of your website. We identify opportunities for improvement, optimize the structure, and implement SEO best practices to ensure your website is search engine-friendly and attracts more organic visitors."
    },
    {
      id: 4,
      content: "We offer flexible and affordable SEO packages tailored to meet the unique needs of your business. Our transparent pricing model ensures you get the best value for your investment, whether you're a small business or a large enterprise looking to enhance your online presence and drive more targeted traffic."
    }
  ]
  return (
    <Layout>
                      <Head>
                                <title>Elite-Agency |   SEO optimization </title>
                                <meta name="description" content="هذا وصف لصفحتك الرائعة." />
                                <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
                                <meta name="author" content="اسمك" />
                                <meta property="og:title" content="صفحة رئيسية رائعة" />
                                <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
                                <meta property="og:image" content="/path-to-your-image.jpg" />
                                <meta property="og:url" content="https://yourwebsite.com" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                              </Head>
      <PageBanner pageName={"SEO Services"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <article className="container">
          <article className="row gap-100">
          <article className="col-lg-8">
  <article className="service-details-content">
    <article className="section-title mb-30">
      <h2>{t('Professional SEO Services to Rank Your Website Higher')}</h2>
    </article>
    <p>
      {t('At Elite, we offer expert SEO services that are tailored to improve your website’s search engine ranking, drive organic traffic, and increase your online visibility. Our team specializes in white-hat SEO strategies that help businesses achieve long-term results and stay ahead of the competition.')}
    </p>
    <article className="image my-40 wow fadeInUp delay-0-2s">
      <img
        src="assets/images/services/service-details.jpg"
        alt="SEO Services"
      />
    </article>
    <article className="row">
      <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
        <h3>{t('Why SEO is Essential for Your Business Growth')}</h3>
      </article>
      <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
        <ul className="list-style-one">
          <li>{t('Increase Organic Traffic and Visibility')}</li>
          <li>{t('Improve Website Rankings on Search Engines')}</li>
          <li>{t('Boost User Engagement and Conversion Rates')}</li>
        </ul>
      </article>
    </article>
    <article className="row pb-30">
      <article className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
        <p>
          {t('SEO is critical for any business looking to succeed online. Our team employs the latest SEO trends and strategies to ensure your website is fully optimized for search engines like Google. We focus on on-page SEO, off-page optimization, and technical improvements to help your business rank higher and attract the right audience.')}
        </p>
      </article>
      <article className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
        <article className="image">
          <img
            src="assets/images/services/service-middle.jpg"
            alt="SEO Process"
          />
        </article>
      </article>
    </article>
    <h3>{t('SEO Strategy and Process')}</h3>
    <p>
      {t('Our SEO experts follow a data-driven approach to create custom strategies that align with your business goals. We begin by conducting a thorough SEO audit, identifying areas for improvement, and implementing changes that will improve your websites search engine rankings and performance.')}
    </p>
    <article
      className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
      id="faq-accordion"
    >

      <JeenaAccordion accordionsTitle={accordionTitle} accordionContent={accordionContent}/>

    </article>
  </article>
</article>


            <ServiceAside/>

          </article>
        </article>
      </section>
      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <Next_Prev_services 
                    prevTitle={"Web Development"}
                    prevLink={"/web-development"}
                    nextTitle={"Content Writing"}
                    nextLink={"/content-writing"}
                  />
    </Layout>
  );
};
export default SEO;
