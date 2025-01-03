import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import ServicesArea from "@/src/components/Services/ServicesArea";
import WorkProcess from "@/src/components/Services/WorkProcess";
import Link from "next/link";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Head>
        <title>Elite-Agency | Services </title>
        <meta name="description" content="هذا وصف لصفحتك الرائعة." />
        <meta name="keywords" content="Next.js, React, SEO, تطوير ويب" />
        <meta name="author" content="اسمك" />
        <meta property="og:title" content="صفحة رئيسية رائعة" />
        <meta property="og:description" content="هذا وصف لصفحتك الرائعة." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageBanner pageName={"Services"} />
      <WorkProcess />
      {/* Work Process Area end */}
      {/* Video Area start */}
      <article className="video-area-two rel z-1">
        <article className="container">
          <article className="video-wrap-two wow fadeInUp delay-0-2s">
            <img  loading="lazy" src="assets/images/background/video.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </article>
        </article>
      </article>
      {/* Video Area end */}

      {/* Services Area start */}
      <ServicesArea />
      {/* Services Area end */}
      {/* Customer Satisfaction Area start */}
      <section className="satisfaction-area-two mt-30 py-100 rpy-70 rel z-1">
        <article className="container">
          <article className="row align-items-center justify-content-between">
            <article className="col-xl-5 col-lg-6">
              <article className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <article className="section-title mb-15">
                  <span className="sub-title mb-15">
                    {t("Guaranteed Customer Satisfaction")}
                  </span>
                  <h2>{t("Ideate, Design And Fuel Business Growth")}</h2>
                </article>
                <p>
                    {t('With over 20 years of experience and 850+ employees board, Iflexion serves medium-sized and large companies globally. Profound knowledge coupled with business understanding is what allows us to create unique solutions that power enterprises, their employees.')}
                </p>
                <article className="row pt-15">
                  <article className="col-sm-6">
                    <article className="service-item style-two">
                      <article className="icon">
                        <i className="flaticon-trust" />
                      </article>
                      <h4>
                        <Link legacyBehavior   href="services">
                          {t('Best Trusted Partner')}
                        </Link>
                      </h4>
                    </article>
                  </article>
                  <article className="col-sm-6">
                    <article className="service-item style-two">
                      <article className="icon">
                        <i className="flaticon-technical-support" />
                      </article>
                      <h4>
                        <Link legacyBehavior   href="services">
                          {t('24/7 Tehnical Support')}
                        </Link>
                      </h4>
                    </article>
                  </article>
                </article>
              </article>
            </article>
            <article className="col-lg-6">
              <article className="cs-image-part ps-0 mb-30 wow fadeInRight delay-0-2s">
                <article className="image">
                  <img
                    loading="lazy"
                    src="assets/images/about/satisfaction-two.jpg"
                    alt="Satisfaction"
                  />
                </article>
                <article className="experience-years">
                  <h4>{t('25 Years Of Experience IT Solutions')}</h4>
                  <img
                    loading="lazy"
                    src="assets/images/about/satisfaction-author.png"
                    alt="Author"
                  />
                </article>
              </article>
            </article>
          </article>
        </article>
      </section>
    </Layout>
  );
};
export default Services;
